<script lang="ts">
    import Section from '$lib/components/Section.svelte';
</script>

{#snippet primary(name: string)}
    <div
        class="rounded-full px-4 py-2 font-display bg-base-fg text-base border border-base-border-light content-center"
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

<Section class="container mx-auto">
    <h2 class="text-2xl font-semibold">About</h2>
    <p class="font-display mt-2">
        I'm a passionate developer who believes in the power of clean code and thoughtful design to
        solve complex problems.
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
    <div class="group relative flex justify-around mt-8 text-sm overflow-hidden h-10 w-full">
        {#each { length: 2 } as _}
            <div
                class="group-hover:animate-paused marquee absolute flex flex-row-reverse gap-2 text-nowrap inset-y-0 last:pr-8"
            >
                {#each ['.NET', 'ASP.NET Core', 'Svelte', 'SvelteKit', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Cloudflare', 'React', 'WebSocket', 'Git', 'ABC'] as name}
                    {@render primary(name)}
                {/each}
                {#each ['Go', 'Flutter'] as name}
                    {@render secondary(name)}
                {/each}
            </div>
        {/each}
    </div>
    <div class="relative h-8 flex overflow-hidden gap-8 mt-4 px-4 text-sm font-display">
        {#each { length: 2 } as _, i}
            <div
                class="marquee-2 flex gap-8 absolute inset-y-0 overflow-hidden last:pr-8"
            >
                {#each { length: 8 } as _}
                    <div class="flex items-center gap-2">
                        <div class="h-2 w-8 bg-base-fg rounded-full"></div>
                        <span class="text-base-fg">Primary</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="h-2 w-8 bg-base-fg-muted rounded-full"></div>
                        <span class="text-base-fg-muted">Secondary</span>
                    </div>
                {/each}
            </div>
        {/each}
    </div>
</Section>

<style>
    @keyframes marquee {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(100%);
        }
    }

    @keyframes marquee-2 {
        0% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(-100%);
        }
    }
    @layer components {
        .marquee {
            overflow: hidden;
            animation: marquee 30s linear infinite;
        }
        .marquee:nth-child(2) {
            transform: translateX(-100%);
            animation-delay: 15s;
        }

        .marquee-2 {
            overflow: hidden;
            animation: marquee-2 30s linear infinite;
        }
        .marquee-2:nth-child(2) {
            transform: translateX(100%);
            animation-delay: 15s;
        }
    }
</style>
