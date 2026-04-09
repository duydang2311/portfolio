<script lang="ts">
	import { browser } from '$app/environment';
	import { setRuntime } from '$lib/runtime';
	import '@fontsource-variable/geist-mono/wght.css';
	import '@fontsource-variable/inter/wght.css';
	import '@fontsource-variable/pixelify-sans/wght.css';
	import Cookies from 'js-cookie';
	import './layout.css';

	const { children } = $props();
	let hue = $state.raw(browser ? Number(Cookies.get('hue') ?? '142') : 142);

	setRuntime({
		set hue(value) {
			hue = value;
		},
		get hue() {
			return hue;
		}
	});
</script>

{@render children()}
