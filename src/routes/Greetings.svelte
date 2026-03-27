<script lang="ts">
	import { motion } from '$lib/utils/transition.svelte';
	import { stagger } from 'motion';
	import { onMount } from 'svelte';
	import { circIn } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	const snippets = [cs, js, rust, go];
	let index = $state.raw(0);
	const snippet = $derived(snippets[index]);

	onMount(() => {
		const interval = setInterval(() => {
			index = (index + 1) % snippets.length;
		}, 4000);
		return () => {
			clearTimeout(interval);
		};
	});
</script>

{#snippet code(prefix: string, value: string, suffix: string)}
	{#each prefix as char}
		<span>{char}</span>
	{/each}
	{#each value as char}
		<span class="text-primary-fg">{char}</span>
	{/each}
	{#each suffix as char}
		<span>{char}</span>
	{/each}
{/snippet}

{#snippet cs()}
	{@render code('Console.WriteLine(', '"xin chào"', ');')}
{/snippet}

{#snippet rust()}
	{@render code('println!(', '"xin chào"', ');')}
{/snippet}

{#snippet js()}
	{@render code('console.log(', '"hi there!"', ');')}
{/snippet}

{#snippet go()}
	{@render code('fmt.Println(', '"hi there!"', ')')}
{/snippet}

<div class="relative">
	<div class="font-display text-fg-muted">
		<span class="font-inherit invisible inline-block w-0 text-inherit" aria-hidden="true">
			&nbsp;
		</span>
		{#key index}
			<div
				class="absolute top-0 right-0 lg:left-0"
				in:motion={(node, animate) => {
					return animate(
						Array.from(node.children) as HTMLElement[],
						{
							visibility: ['hidden', 'visible']
						},
						{
							delay: stagger(0.06, { startDelay: 0.25 }),
							duration: 0
						}
					);
				}}
				out:fly={{ y: '-4px', easing: circIn, duration: 250 }}
			>
				{@render snippet()}
			</div>
		{/key}
	</div>
</div>
