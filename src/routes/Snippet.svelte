<script lang="ts">
    import Section from '$lib/components/Section.svelte';
    import { codeToHtml, type DecorationItem } from 'shiki';
    import { autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';
    import sanitize from 'sanitize-html';
    import invariant from 'tiny-invariant';

    const {
        snippets,
    }: {
        snippets: {
            lang: string;
            snippet: string;
            signatureHelps: Record<string, string>;
        }[];
    } = $props();
    const snippetAsHtml = snippets.map(({ lang, snippet, signatureHelps }) =>
        codeToHtml(snippet, {
            lang,
            themes: {
                light: 'rose-pine-dawn',
                dark: 'rose-pine',
            },
            mergeWhitespaces: false,
            transformers: [
                {
                    span(node) {
                        const child = node.children[0];
                        if (child.type !== 'text' || signatureHelps[child.value] == null) {
                            return;
                        }
                        this.addClassToHast(node, 'signature-help');
                        node.properties['data-signature-content'] = signatureHelps[child.value];
                    },
                    pre(node) {
                        this.addClassToHast(
                            node,
                            'p-4 leading-6 rounded-xl border border-base-border'
                        );
                    },
                },
            ],
        })
    );
</script>

<Section>
    <h2 class="font-semibold">Snippet</h2>
    <p class="mt-2 max-w-[80ch]">
        A sneak peek into my code snippets that reflects my coding style and preferences. Check out
        the underlined parts for the explaination for why I write the code in a certain way, and
        what I think about it.
    </p>
    <div class="mt-8 font-mono text-xs">
        {#each snippetAsHtml as promise}
            {#await promise then html}
                <div
                    {@attach (node) => {
                        const nodes = node.querySelectorAll(
                            '.signature-help'
                        ) as NodeListOf<HTMLSpanElement>;
                        const cleanups = Array.from(nodes).map((node) => {
                            const div = document.createElement('div');
                            node.classList.add('relative');
                            Object.assign(div, {
                                className: 'signature-popover',
                            });
                            const content = node.getAttribute('data-signature-content');
                            invariant(
                                content != null && typeof content === 'string',
                                'Expected `content` to be string'
                            );
                            codeToHtml(content, {
                                lang: 'typescript',
                                themes: {
                                    light: 'rose-pine-dawn',
                                    dark: 'rose-pine',
                                },
                                transformers: [
                                    {
                                        pre(node) {
                                            this.addClassToHast(node, 'p-4 w-max');
                                        },
                                    },
                                ],
                            }).then((a) => {
                                div.innerHTML = a;
                            });
                            const span = document.createElement('span');
                            node.insertAdjacentElement('afterend', div);
                            const update = () => {
                                computePosition(node, div, {
                                    placement: 'top-start',
                                    middleware: [flip(), shift({ padding: 8 })],
                                }).then(({ x, y }) => {
                                    Object.assign(div.style, {
                                        left: `${x}px`,
                                        top: `${y}px`,
                                    });
                                });
                            };
                            const show = () => {
                                update();
                                div.addEventListener('mouseleave', hideMouseLeave);
                                div.style.display = 'block';
                            };

                            const hideMouseLeave = (e: MouseEvent) => {
                                const sel = document.getSelection();
                                if (sel != null && !sel.isCollapsed) {
                                    return;
                                }
                                const target = e.relatedTarget as HTMLElement;
                                console.log(target, div.contains(target));
                                if (div.contains(target)) {
                                    return;
                                }
                                div.removeEventListener('mouseleave', hideMouseLeave);
                                div.style.display = '';
                            };

                            (
                                [
                                    ['mouseenter', show],
                                    ['mouseleave', hideMouseLeave],
                                ] as const
                            ).forEach(([event, listener]) => {
                                node.addEventListener(event, listener);
                            });
                            const cleanup = autoUpdate(node, div, update);
                            return () => {
                                cleanup();
                                div.remove();
                            };
                        });
                        return () => {
                            for (const cleanup of cleanups) {
                                cleanup();
                            }
                        };
                    }}
                >
                    {@html html}
                </div>
            {/await}
        {/each}
    </div>
</Section>

<style>
    :global(.signature-help) {
        text-decoration: underline;
        text-underline-offset: 0.4rem;
        text-decoration-style: dotted;
    }

    :global(.signature-popover) {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        max-height: 32rem;
        max-width: calc(100vw - 2rem);
        overflow: auto;
        border: 1px solid var(--color-base-border);
    }
</style>
