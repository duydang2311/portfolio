<script lang="ts">
	import { page } from '$app/state';
	import { mount, unmount } from 'svelte';
	import type { PageProps } from './$types';
	import Carousel from './Carousel.svelte';

	const { data }: PageProps = $props();
	const notShallow = $derived(page.state.shallowWorkPageProps == null);
	const medias = $derived.by(() => {
		if (data.work.meta && data.work.meta.medias && Array.isArray(data.work.meta.medias)) {
			return data.work.meta.medias as { src: string }[];
		}
		return null;
	});
</script>

<main data-not-shallow={notShallow ? '' : undefined} class="prose max-w-5xl">
	<article
		class="flex-1"
		{@attach (node) => {
			if (!medias) {
				return;
			}

			const container = node.querySelector('[data-part=media--container]');
			if (!container) {
				return;
			}

			const component = mount(Carousel, {
				target: container,
				props: { medias }
			});

			return () => {
				unmount(component, { outro: true });
			};
		}}
	>
		<!-- {#if medias}
			<Carousel {medias} />
		{/if} -->
		<div class="p-8">
			{@html data.work.html}
		</div>
	</article>
</main>
