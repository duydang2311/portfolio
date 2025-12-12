<script lang="ts">
    import { onNavigate } from '$app/navigation';
    import { page } from '$app/state';

    const { data, children } = $props();
    const segment = $derived(page.url.pathname.split('/')[2]);
    let transitionEl = $state.raw<HTMLDivElement>();

    onNavigate((navigation) => {
        const el = transitionEl;
        if (!el) {
            return;
        }

        const from = navigation.from?.url.pathname.split('/')[2];
        const to = navigation.to?.url.pathname.split('/')[2];
        if (from !== to) {
            el.classList.remove('animate-slide-down-slow');
            requestAnimationFrame(() => {
                el.classList.add('animate-slide-down-slow');
            });
        }
    });
</script>

<main class="max-h-full flex-1 flex flex-col">
    <h1 class="text-2xl font-medium">02 Works</h1>
    <p class="text-sm">A collection of projects that showcase my approach to problem-solving.</p>
    <div class="flex-1 mt-4 overflow-hidden flex flex-col lg:flex-row">
        <ul
            class="flex overflow-auto max-lg:*:flex-1 max-lg:*:text-nowrap lg:block text-center lg:text-left overflow-y-auto lg:border-r-0 border lg:border-b-2 border-base-border"
        >
            {#each data.works as work (work.repo)}
                <li>
                    <a
                        data-sveltekit-replacestate
                        href="/works/{work.repo}"
                        data-active={segment === work.repo ? '' : undefined}
                        class="c-clickable px-4 data-active:animate-highlight data-active:bg-base-fg data-active:text-base-strong"
                    >
                        {work.name}
                    </a>
                </li>
            {/each}
        </ul>
        <div
            class="relative overflow-hidden flex-1 border border-base-border border-b-2 max-lg:border-t-0"
        >
            <article class="overflow-auto p-4 h-full">
                {@render children()}
            </article>
            <div
                bind:this={transitionEl}
                class="absolute left-0 right-1 inset-y-0 animate-slide-down-slow bg-base"
            ></div>
        </div>
    </div>
</main>
