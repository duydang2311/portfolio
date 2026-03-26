<script lang="ts">
	import '@fontsource-variable/geist-mono/wght.css';
	import '@fontsource-variable/geist/wght.css';
	import '@fontsource-variable/inter/wght.css';
	import '@fontsource-variable/pixelify-sans/wght.css';
	import './layout.css';

	const { children } = $props();
</script>

<svelte:head>
	<title>duyda's portfolio</title>
</svelte:head>

{@render children()}
