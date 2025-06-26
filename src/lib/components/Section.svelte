<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";

    const { class: cls, children, ...props }: HTMLAttributes<HTMLElement> = $props();
</script>

<section {...props} class="h-screen min-h-max py-20 px-4 {cls}">
    {@render children?.()}
</section>