<script lang="ts">
    import { onNavigate } from '$app/navigation';
    import { mount } from 'svelte';
    import invariant from 'tiny-invariant';
    import Carousel from './_components/Carousel.svelte';

    const { data } = $props();
    let containerEl = $state.raw<HTMLElement>();

    function mountCarousel(node: HTMLElement) {
        const container = node.querySelector('.c-gallery-container');
        if (!container) {
            return;
        }

        container.replaceChildren();
        mount(Carousel, {
            target: container,
            props: {
                images: data.work.images
                    ? Array.from(data.work.images).map((a) => ({
                          title: a.title,
                          src: a.src,
                          alt: a.alt
                      }))
                    : [],
            },
        });
    }

    onNavigate((navigation) => {
        navigation.complete.then(() => {
            invariant(containerEl, 'containerEl must not be null');
            mountCarousel(containerEl);
        });
    });
</script>

<div
    bind:this={containerEl}
    class="prose max-w-none"
    {@attach (node) => {
        mountCarousel(node);
    }}
>
    {@html data.work.htmlString}
</div>
