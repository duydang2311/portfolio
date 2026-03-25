<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '@fontsource-variable/geist-mono/wght.css';
	import '@fontsource-variable/geist/wght.css';
	import '@fontsource-variable/inter/wght.css';
	import '@fontsource-variable/pixelify-sans/wght.css';
	import './layout.css';

	const { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
