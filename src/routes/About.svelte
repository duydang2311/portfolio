<script lang="ts">
    import Section from '$lib/components/Section.svelte';
</script>

{#snippet primary(name: string)}
    <div
        class="rounded-full px-4 py-2 font-display bg-base-fg-dark dark:bg-base-fg-light text-base content-center"
    >
        {name}
    </div>
{/snippet}

{#snippet secondary(name: string)}
    <div
        class="rounded-full px-4 py-2 font-display bg-base-fg-muted text-base content-center"
    >
        {name}
    </div>
{/snippet}

<Section>
    <h2 class="font-semibold">About</h2>
    <p class="mt-2 max-w-[80ch]">
        I'm an early-career software engineer, learning by doing and staying curious along the way. I
        enjoy building things from scratch, exploring modern tools, tweaking my dev environment, and
        refining how I work. There's a lot to learn, and I'm here for it.
    </p>
    <div class="mt-8">
        <h3>Core Stack</h3>
        <div class="flex overflow-hidden gap-2 group mt-2" style:--_marquee-gap="0.5rem">
            <ul
                class="flex gap-2 shrink-0 min-w-full overflow-hidden [animation:marquee_20s_linear_infinite] group-hover:animate-paused"
                {@attach (node) => {
                    node.insertAdjacentElement('afterend', node.cloneNode(true) as HTMLElement);
                }}
            >
                {#each ['.NET', 'ASP.NET Core', 'Svelte', 'SvelteKit', 'JavaScript', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Cloudflare', 'React', 'WebSocket'] as name (name)}
                    <li>
                        {@render primary(name)}
                    </li>
                {/each}
                {#each ['Go', 'Flutter'] as name (name)}
                    <li>
                        {@render secondary(name)}
                    </li>
                {/each}
            </ul>
        </div>
    </div>
    <ul class="mt-4 flex gap-x-8 flex-wrap">
        <li class="flex items-center gap-2">
            <div class="h-2 w-8 bg-base-fg-light rounded-full"></div>
            <span class="text-base-fg">Primary</span>
        </li>
        <li class="flex items-center gap-2">
            <div class="h-2 w-8 bg-base-fg-muted rounded-full"></div>
            <span class="text-base-fg-muted">Secondary</span>
        </li>
    </ul>
</Section>
