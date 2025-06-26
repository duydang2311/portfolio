<script lang="ts">
    import type { LayoutProps } from './$types';
    import '@fontsource/inter-tight';
    import '@fontsource/fira-sans';
    import './+layout.css';

    const { children }: LayoutProps = $props();
</script>

{@render children()}
