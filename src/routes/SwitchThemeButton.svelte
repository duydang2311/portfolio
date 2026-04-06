<script lang="ts">
	import { browser } from '$app/environment';
	import { Computer, Moon, Sun } from '$lib/components/icons';
	import { usePageData } from '$lib/utils/kit';
	import { onMount, untrack } from 'svelte';
	import invariant from 'tiny-invariant';
	import { type PageData } from './$types';
	import Cookies from 'js-cookie';

	const data = usePageData<PageData>();
	let requestedTheme = $state.raw(data.theme);
	let actualTheme = $state.raw(untrack(() => getActualTheme(requestedTheme)));

	function setActualTheme(theme: 'light' | 'dark') {
		if (actualTheme === theme) {
			actualTheme = theme;
			document.documentElement.dataset.theme = theme;
			return;
		}

		document.startViewTransition(() => {
			actualTheme = theme;
			document.documentElement.dataset.theme = theme;
		});
	}

	function handleColorSchemeChanged(e: MediaQueryListEvent) {
		setActualTheme(e.matches ? 'dark' : 'light');
	}

	function getActualTheme(theme: 'light' | 'dark' | 'system') {
		if (browser) {
			if (theme === 'system') {
				return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
			}
		}
		return theme;
	}

	function toggleTheme() {
		requestedTheme =
			requestedTheme === 'light' ? 'dark' : requestedTheme === 'dark' ? 'system' : 'light';
		Cookies.set('theme', requestedTheme, { path: '/', expires: 365 });
	}

	$effect(() => {
		if (requestedTheme !== 'system') {
			setActualTheme(requestedTheme);
			return;
		}
		const media = window.matchMedia('(prefers-color-scheme: dark)');
		media.addEventListener('change', handleColorSchemeChanged);
		setActualTheme(media.matches ? 'dark' : 'light');
		return () => {
			media.removeEventListener('change', handleColorSchemeChanged);
		};
	});
</script>

<button
	type="button"
	aria-label="switch theme"
	class="relative size-6 rounded-sm hover:bg-base-subtle active:bg-base-emph"
	onclick={toggleTheme}
>
	{#if requestedTheme === 'light'}
		<Sun class="absolute absolute-center size-5" />
	{:else if requestedTheme === 'dark'}
		<Moon class="absolute absolute-center size-5" />
	{:else}
		<Computer class="absolute absolute-center size-5" />
	{/if}
</button>
