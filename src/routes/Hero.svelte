<script lang="ts">
	import { ArrowTopRight } from '$lib/components/icons';
	import { pageInView } from '$lib/utils/dom';
	import { circIn, circOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	const subtitles = [
		'Turning ideas into software.',
		'Desktop & web apps.',
		'Build & break things.',
		'Start small & scale up.'
	];
	let index = $state.raw(0);
	const subtitle = $derived(subtitles[index]);
</script>

<div>
	<div class="text-xs tracking-wide text-fg-muted uppercase">Available for hire</div>
	<div class="font-display text-6xl tracking-tight text-primary-fg">duydang</div>
	<div
		class="relative mt-1 text-sm"
		{@attach (node) => {
			return pageInView(node, () => {
				const interval = setInterval(() => {
					index = (index + 1) % subtitles.length;
				}, 2000);
				return () => {
					clearTimeout(interval);
				};
			});
		}}
	>
		<span class="font-inherit invisible inline-block w-0 text-inherit" aria-hidden="true">
			&nbsp;
		</span>
		{#key index}
			<p
				class="absolute top-0 left-0 text-fg-muted"
				in:fly={{ y: '4px', easing: circOut, duration: 250, delay: 250 }}
				out:fly={{ y: '-4px', easing: circIn, duration: 250 }}
			>
				{subtitle}
			</p>
		{/key}
	</div>
	<div class="mt-4 flex gap-4">
		<a
			href="https://github.com/duydang2311"
			target="_blank"
			class="group relative block w-fit bg-primary px-4 py-1 text-primary-fg hover:bg-primary-subtle active:bg-primary-emph"
		>
			<div class="flex items-center gap-2 font-display">
				<span>GitHub</span>
				<ArrowTopRight />
			</div>
			<span class="absolute -top-px -right-2 -left-2 h-px bg-primary-border"></span>
			<span class="absolute -right-2 -bottom-px -left-2 h-px bg-primary-border"></span>
			<span class="absolute -top-2 -bottom-2 -left-px w-px bg-primary-border"></span>
			<span class="absolute -top-2 -right-px -bottom-2 w-px bg-primary-border"></span>
		</a>
	</div>
</div>
