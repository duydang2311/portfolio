<script lang="ts">
	import { page } from '$app/state';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
	const notShallow = $derived(page.state.shallowWorkPageProps == null);
</script>

<main data-not-shallow={notShallow ? '' : undefined} class="data-not-shallow:p-8 prose">
	{@html data.contentHtml}
</main>
