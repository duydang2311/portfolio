<script lang="ts">
    import Section from '$lib/components/Section.svelte';
</script>

{#snippet primary(name: string)}
    <div
        class="rounded-full px-4 py-2 font-display bg-base-fg-light text-base border border-base-border-light content-center"
    >
        {name}
    </div>
{/snippet}

{#snippet secondary(name: string)}
    <div
        class="rounded-full px-4 py-2 font-display bg-base-fg-muted text-base border border-base-border-light content-center"
    >
        {name}
    </div>
{/snippet}

<Section>
    <h2 class="font-semibold">About</h2>
    <p class="mt-2">
        I’m a developer driven by curiosity and a love for clean, thoughtful code. I’ve built a
        strong foundation through side projects and open source work, focusing on modern web
        technologies and user-centered design. While I’ve enjoyed coding for fun, I’m now excited to
        take the next step and contribute professionally.
    </p>
    <div class="flex *:flex-1 justify-between gap-8 mt-8 *:text-pretty">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, necessitatibus ad
            ab ducimus quod reiciendis nostrum saepe nulla? Blanditiis voluptatibus similique ab
            veritatis enim. Pariatur praesentium deleniti soluta consequuntur officia.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, incidunt enim aliquid
            facere non nemo officiis, a assumenda ex asperiores praesentium quibusdam aspernatur
            magnam quaerat voluptates corporis repudiandae dolores ut!
        </p>
    </div>
    <div class="flex overflow-hidden mt-8 gap-2 group" style:--_marquee-gap="0.5rem">
        <ul
            class="flex gap-2 shrink-0 min-w-full overflow-hidden [animation:marquee_20s_linear_infinite] group-hover:animate-paused"
            {@attach (node) => {
                node.insertAdjacentElement('afterend', node.cloneNode(true) as HTMLElement);
            }}
        >
            {#each ['.NET', 'ASP.NET Core', 'Svelte', 'SvelteKit', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Cloudflare', 'React', 'WebSocket', 'Git', 'ABC'] as name (name)}
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
    <ul class="mt-2 flex gap-8">
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
