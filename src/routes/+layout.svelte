<script lang="ts">
    import type { LayoutProps } from './$types';
    import './+layout.css';

    const { children }: LayoutProps = $props();
</script>

{@render children()}
