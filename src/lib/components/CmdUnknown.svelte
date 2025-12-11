<script lang="ts">
    const { command }: { command: string } = $props();
</script>

<p>
    Unknown command <span
        style="--_highlight: var(--color-red-500); animation: highlight 0.2s steps(4)"
        >"{command}"</span
    >. Use
    <span style="animation: highlight 0.2s steps(4)">"help"</span> to see available commands.
</p>
