<script lang="ts">
    import { on } from 'svelte/events';
    import invariant from 'tiny-invariant';

    interface Props {
        src: string;
        onClickOutside?: () => void;
    }

    const { src, onClickOutside }: Props = $props();
    let scale = $state.raw(1);
    let x = $state.raw(0);
    let y = $state.raw(0);
    let imageEl = $state.raw<HTMLImageElement>();
    let panning = false;

    function onPointerMove(pageX: number, pageY: number) {
        return (e: PointerEvent) => {
            x += e.pageX - pageX;
            y += e.pageY - pageY;
            pageX = e.pageX;
            pageY = e.pageY;
        };
    }
</script>

<div class="fixed inset-0 flex justify-center items-center z-10">
    <div class="absolute inset-0 bg-black/40"></div>
    <div
        class="relative overflow-hidden max-w-full max-h-full bg-base-strong border border-base-border select-none"
        onwheel={(e) => {
            invariant(imageEl, 'imageEl must not be null');
            e.preventDefault();

            const newScale = Math.max(0.5, Math.min(5, scale + (e.deltaY < 0 ? 1 : -1) * 0.25));
            if (Math.abs(scale - newScale) <= Number.EPSILON) {
                return;
            }

            x = (x / scale) * newScale;
            y = (y / scale) * newScale;
            scale = newScale;
        }}
        {@attach (node) => {
            if (onClickOutside) {
                return on(window, 'click', (e) => {
                    if (panning) {
                        panning = false;
                    } else if (!node.contains(e.target)) {
                        onClickOutside();
                    }
                });
            }
        }}
        onpointerdown={(e) => {
            panning = true;
            const offPointerMove = on(
                e.currentTarget,
                'pointermove',
                onPointerMove(e.pageX, e.pageY)
            );
            const offPointerUp = on(window, 'pointerup', () => {
                offPointerMove();
                offPointerUp();
            });
        }}
    >
        <img
            bind:this={imageEl}
            {src}
            alt=""
            style:--_x="{x}px"
            style:--_y="{y}px"
            style:--_scale={scale}
            class="m-0! w-auto max-w-[92dvw] h-auto max-h-[92dvh] pointer-events-none translate-x-(--_x) translate-y-(--_y) scale-(--_scale)"
        />
    </div>
</div>
