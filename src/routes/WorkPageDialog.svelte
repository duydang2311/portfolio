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
		class="fixed top-0 left-0 flex h-screen w-screen items-center justify-center px-6"
		transition:scale={{ start: 0.98, duration: 300, easing: circInOut }}
	>
		<div
			{...dialog.api.getContentProps()}
			class="max-w-full rounded-lg border border-base-border bg-surface p-1 focus:outline-none"
		>
			<div class="h-[80vh] w-5xl max-w-full overflow-auto px-6 py-4">
				<WorkPage data={page.state.shallowWorkPageProps.data} />
			</div>
		</div>
	</div>
{/if}
