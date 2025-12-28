<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';

    type Props = HTMLAttributes<HTMLDivElement>;

    const { children, class: cls, ...props }: Props = $props();
</script>

<div {...props} class="c-card {cls}">
    {@render children?.()}
</div>
