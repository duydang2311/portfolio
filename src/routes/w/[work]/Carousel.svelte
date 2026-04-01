<script lang="ts">
	import { ArrowLeft, ArrowRight } from '$lib/components/icons';
	import { pageInView } from '$lib/utils/dom';
	import EmblaCarousel, { type EmblaCarouselType } from 'embla-carousel';
	import invariant from 'tiny-invariant';

	interface Props {
		medias: { src: string }[];
	}

	const { medias }: Props = $props();
	let embla: EmblaCarouselType | null = null;
	let thumbnailsEmbla: EmblaCarouselType | null = null;
	let activeIndex = $state.raw(0);
	let canNext = $state.raw(false);
	let canPrev = $state.raw(false);
</script>

<div class="not-prose">
	<div
		class="group relative aspect-video overflow-hidden rounded-md border border-base-border bg-surface-subtle"
	>
		<!-- <svg xmlns="http://www.w3.org/2000/svg" class="absolute top-0 left-0 size-full"
			><defs
				><pattern
					id="a"
					width="30"
					height="30"
					patternTransform="scale(2)"
					patternUnits="userSpaceOnUse"
					><path
						fill="none"
						stroke="var(--color-fg)"
						opacity="0.04"
						stroke-width="1"
						d="M0 22.5h30v15H0zm15-15h30v15H15m-30-15h30v15h-30zm15-15h30v15H0z"
					/></pattern
				></defs
			><rect width="800%" height="800%" fill="url(#a)" transform="translate(0 -15)" /></svg
		> -->
		<div
			class="h-full overflow-hidden"
			{@attach (node) => {
				embla = EmblaCarousel(node, {
					duration: 20,
					align: 'start'
				});
				function update(embla: EmblaCarouselType) {
					activeIndex = embla.selectedScrollSnap();
					canNext = embla.canScrollNext();
					canPrev = embla.canScrollPrev();
					thumbnailsEmbla?.scrollTo(activeIndex);
				}
				embla.on('select', update);
				embla.on('init', update);
				return () => {
					if (embla) {
						embla.destroy();
						embla = null;
					}
				};
			}}
		>
			<div class="-ml-2 flex h-full touch-pan-y touch-pinch-zoom items-center">
				{#each medias as media (media.src)}
					<div class="embla--slide">
						{#if media.src.endsWith('mp4')}
							<video
								src={media.src}
								controls
								class="embla--slide--content"
								{@attach (node) => {
									return pageInView(node, () => {
										if (node.hasAttribute('data-resumable')) {
											node.removeAttribute('data-resumable');
											node.play();
										}
										return () => {
											if (!node.paused) {
												node.setAttribute('data-resumable', '');
												node.pause();
											}
										};
									});
								}}
							>
								<track kind="captions" />
							</video>
						{:else}
							<img src={media.src} alt="" class="embla--slide--content" />
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
	<div class="mt-1 flex items-center justify-center">
		<button
			type="button"
			class="rounded-sm p-0.5 not-disabled:hover:bg-base-subtle not-disabled:active:bg-base-emph disabled:opacity-40"
			disabled={!canPrev}
			onclick={() => {
				invariant(embla, 'embla must not be null');
				embla.scrollPrev();
			}}
		>
			<ArrowLeft />
		</button>
		<div
			class="overflow-hidden rounded-sm p-1 backdrop-blur"
			{@attach (node) => {
				thumbnailsEmbla = EmblaCarousel(node, {
					align: 'start',
					duration: 20
				});
				return () => {
					if (thumbnailsEmbla) {
						thumbnailsEmbla.destroy();
						thumbnailsEmbla = null;
					}
				};
			}}
		>
			<div class="-ml-2 flex touch-pan-y touch-pinch-zoom">
				{#each medias as media, i (media.src)}
					<button
						type="button"
						data-active={activeIndex === i ? '' : undefined}
						class="embla-thumb--slide opacity-40 transition duration-75 hover:opacity-100"
						onclick={() => {
							invariant(embla, 'embla must not be null');
							embla.scrollTo(i);
						}}
					>
						{#if media.src.endsWith('mp4')}
							<video src={media.src} muted class="embla-thumb--slide--content"></video>
						{:else}
							<img src={media.src} alt="" class="embla-thumb--slide--content" />
						{/if}
					</button>
				{/each}
			</div>
		</div>
		<button
			type="button"
			class="rounded-sm p-0.5 not-disabled:hover:bg-base-subtle not-disabled:active:bg-base-emph disabled:opacity-40"
			disabled={!canNext}
			onclick={() => {
				invariant(embla, 'embla must not be null');
				embla.scrollNext();
			}}
		>
			<ArrowRight />
		</button>
	</div>
</div>

<style>
	.embla--slide {
		flex: 0 0 100%;
		display: flex;
		padding-left: 0.5rem;
		/* height: 100%; */
		max-height: 100%;
	}

	.embla--slide--content {
		width: 100%;
		object-fit: contain;
	}

	.embla-thumb--slide {
		flex-grow: 0;
		flex-shrink: 0;
		display: flex;
		padding-left: 0.5rem;
		&[data-active] {
			opacity: 1;
			& .embla-thumb--slide--content {
				border-color: var(--color-primary-fg);
			}
		}
	}

	.embla-thumb--slide--content {
		height: 2rem;
		width: 100%;
		object-fit: contain;
		border: 1px solid transparent;
	}
</style>
