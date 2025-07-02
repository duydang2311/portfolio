<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";

    const { class: cls, children, ...props }: HTMLAttributes<HTMLElement> = $props();
</script>

<section {...props} class="c-section min-h-screen py-20 px-4 {cls}">
    {@render children?.()}
</section>