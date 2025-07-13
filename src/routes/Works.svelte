<script lang="ts">
    import Section from '$lib/components/Section.svelte';
    import { ExternalLink } from 'lucide-svelte';
</script>

{#snippet work(category: string, name: string, year: string, desc: string, techs: string[])}
    <div class="grid grid-cols-2 items-start gap-x-16 gap-y-6">
        <div class="col-span-full lg:col-span-1">
            <p class="capitalize text-sm text-base-fg-muted">{category}</p>
            <h3>{name}</h3>
            <p class="text-sm text-base-fg-muted">{year}</p>
        </div>
        <img
            src="https://placehold.co/1920x1080"
            loading="lazy"
            alt="Demo screen"
            class="min-w-0 h-auto row-start-2 col-span-full lg:col-start-2 lg:row-start-1 lg:row-span-2"
        />
        <div class="row-start-3 col-span-full lg:row-start-2 lg:col-span-1">
            <p class="text-pretty">
                {desc}
            </p>
            <ul class="mt-6 flex flex-wrap gap-2">
                {#each techs as tech (tech)}
                    <li
                        class="rounded-full bg-base-dark dark:bg-base-light border border-base-border-light dark:border-base-border-dark px-2 py-1 text-sm text-base-fg-light dark:text-base-fg-dark"
                    >
                        {tech}
                    </li>
                {/each}
            </ul>
            <button type="button" class="c-button mt-6 rounded-full text-sm">
                View project
                <ExternalLink class="inline ml-1" />
            </button>
        </div>
    </div>
{/snippet}

<Section>
    <h2 class="font-semibold">Works</h2>
    <p>A collection of projects that showcase my approach to problem-solving.</p>
    <ul class="mt-16 space-y-32">
        {#each { length: 5 } as _}
            <li>
                {@render work(
                    'Productivity app',
                    'Project Management Website',
                    '2025',
                    'A web application built to simplify project management, offering features like task tracking with Kanban boards, timeline views, integrated chat, and workspace file storage.',
                    [
                        'ASP.NET Core',
                        'FastEndpoints',
                        'Entity Framework Core',
                        'SignalR',
                        'SvelteKit',
                        'PostgreSQL',
                        'Vertical Slice Architecture',
                        'NATS.io',
                        'Cloudflare R2',
                        'Cloudflare Workers',
                    ]
                )}
            </li>
        {/each}
    </ul>
</Section>
