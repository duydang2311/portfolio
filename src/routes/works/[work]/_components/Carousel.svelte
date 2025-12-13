<script lang="ts">
    import EmblaCarousel, { type EmblaCarouselType } from 'embla-carousel';
    import { flushSync, tick, untrack } from 'svelte';
    import { on } from 'svelte/events';
    import ChevronLeft from '~icons/lucide/chevron-left';
    import ChevronRight from '~icons/lucide/chevron-right';

    interface Props {
        images: {
            title: string;
            src: string;
            alt?: string;
        }[];
    }

    const { images }: Props = $props();
    let embla = $state.raw<EmblaCarouselType>();
    let fullscreenImage = $state.raw<{
        title: string;
        src: string;
        alt?: string;
    }>();
</script>

{#if fullscreenImage}
    <div class="fixed inset-0 bg-black/60 z-10"></div>
    <div
        class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        {@attach (node) => {
            return on(window, 'click', (e) => {
                if (!node.contains(e.target)) {
                    fullscreenImage = undefined;
                }
            });
        }}
    >
        <img
            src={fullscreenImage.src}
            alt={fullscreenImage.alt}
            class="max-h-[80dvh] h-full not-prose"
        />
        <div class="bg-base px-2">
            {fullscreenImage.title}
        </div>
    </div>
{/if}
<section class="w-fit bg-base-weak border border-base-border p-2 lg:p-4">
    <h2
        class="font-bold text-p overlay-barcode inline uppercase tracking-wider"
        style:--_barcode="color-mix(in oklch, var(--color-base-weak) 60%, transparent)"
    >
        Gallery
    </h2>
    <div
        class="overflow-hidden mt-1"
        {@attach (node) => {
            return untrack(() => {
                const current = EmblaCarousel(node);
                current.on('init', (current) => {
                    flushSync(() => {
                        embla = undefined;
                    });
                    embla = current;
                });
                current.on('reInit', (current) => {
                    flushSync(() => {
                        embla = undefined;
                    });
                    embla = current;
                });
                current.on('select', (current) => {
                    flushSync(() => {
                        embla = undefined;
                    });
                    embla = current;
                });
                return () => {
                    current.destroy();
                    embla = undefined;
                };
            });
        }}
    >
        <div class="embla__container flex items-start -ml-4">
            {#each images as image, i}
                <button
                    type="button"
                    tabindex="-1"
                    class="block pl-4 grow-0 shrink-0"
                    onclick={() => {
                        if (!embla) {
                            return;
                        }
                        if (embla.slidesInView().includes(i)) {
                            setTimeout(() => {
                                fullscreenImage = image;
                            }, 0);
                        } else {
                            embla.scrollTo(i);
                        }
                    }}
                >
                    <div
                        class="hover:overlay-barcode"
                        style="--_barcode: color-mix(in oklch, var(--color-base-weak) 60%, transparent)"
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            title={image.title}
                            class="m-0! h-96 object-cover object-center transition"
                        />
                        <div class="bg-base text-left px-2 font-medium">
                            {image.title}
                        </div>
                    </div>
                </button>
            {/each}
        </div>
    </div>

    {#if embla}
        {@const currentEmbla = embla}
        <div class="flex justify-between gap-8 mt-4">
            <div class="flex gap-4">
                <button
                    type="button"
                    class="c-clickable bg-base active:bg-base-fg"
                    disabled={!currentEmbla.canScrollPrev()}
                    onclick={() => {
                        currentEmbla.scrollPrev();
                    }}
                >
                    <div class="overlay-barcode">
                        <ChevronLeft />
                    </div>
                </button>
                <button
                    type="button"
                    class="c-clickable bg-base active:bg-base-fg"
                    disabled={!currentEmbla.canScrollNext()}
                    onclick={() => {
                        currentEmbla.scrollNext();
                    }}
                >
                    <div class="overlay-barcode">
                        <ChevronRight />
                    </div>
                </button>
            </div>

            <div class="flex gap-2">
                {#each currentEmbla.scrollSnapList() as _, i}
                    <button
                        type="button"
                        aria-label="Scroll to image {i}"
                        data-active={currentEmbla.selectedScrollSnap() === i ? '' : undefined}
                        class="embla__dot size-4 bg-base c-clickable data-active:bg-base-fg data-active:animate-highlight"
                        onclick={() => {
                            currentEmbla.scrollTo(i);
                        }}
                    ></button>
                {/each}
            </div>
        </div>
    {/if}
</section>
