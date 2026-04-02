<script lang="ts">
	import { page } from '$app/state';
	import { createDialog } from '$lib/components/builders.svelte';
	import { portal } from '@zag-js/svelte';
	import { circInOut } from 'svelte/easing';
	import { fade, scale } from 'svelte/transition';
	import WorkPage from './w/[work]/+page.svelte';

	const id = $props.id();
	const dialog = createDialog({
		id,
		get open() {
			return page.state.shallowWorkPageProps != null;
		},
		onOpenChange: (details) => {
			if (!details.open) {
				history.back();
			}
		}
	});
</script>

{#if dialog.api.open && page.state.shallowWorkPageProps}
	<div
		use:portal
		transition:fade={{ duration: 300, easing: circInOut }}
		{...dialog.api.getBackdropProps()}
		class="fixed inset-0 bg-black/5 backdrop-blur-[1px]"
	></div>
	<div
		use:portal
		{...dialog.api.getPositionerProps()}
		class="fixed top-0 left-0 h-screen w-screen content-center items-center justify-center px-6"
		transition:scale={{ start: 0.98, duration: 300, easing: circInOut }}
	>
		<div
			{...dialog.api.getContentProps()}
			class="mx-auto w-5xl max-w-full border-2 border-base-border dark:bg-surface-border bg-surface focus:outline-none"
		>
			<div class="h-[80vh] overflow-auto">
				<WorkPage data={page.state.shallowWorkPageProps.data} />
			</div>
		</div>
	</div>
{/if}
