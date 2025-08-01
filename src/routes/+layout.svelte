<script lang="ts">
    import '@fontsource/inter-tight';
    import '@fontsource/figtree';
    import '@fontsource/geist-mono';
    import '../app.css';

    import { setRuntime } from '$lib/common/runtime';
    import { createRef, watch } from '@duydang2311/svutils';
    import type { LayoutProps } from './$types';
    import { isDarkColorScheme } from '$lib/common/utils';

    const { data, children }: LayoutProps = $props();
    const colorScheme = createRef(() => data.colorScheme as 'light' | 'dark' | 'system');

    setRuntime({
        colorScheme,
    });

    if (isDarkColorScheme(colorScheme.current)) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }

    watch(() => colorScheme.current)(() => {
        if (colorScheme.current !== 'system') {
            return;
        }

        const media = window.matchMedia('(prefers-color-scheme: dark)');
        const handler = (e: MediaQueryListEvent) => {
            const dark = e.matches;
            if (dark) {
                document.documentElement.setAttribute('data-theme', 'dark');
            } else {
                document.documentElement.removeAttribute('data-theme');
            }
        };
        media.addEventListener('change', handler);
        return () => {
            media.removeEventListener('change', handler);
        };
    });
</script>

<svelte:head>
    <title>Duy Dang</title>
</svelte:head>

{@render children()}
