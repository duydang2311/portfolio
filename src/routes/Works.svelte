<script lang="ts">
    import Section from '$lib/components/Section.svelte';
    import { ExternalLink } from 'lucide-svelte';
</script>

<Section class="container mx-auto">
    <h2 class="font-semibold">Works</h2>
    <p>A collection of projects that showcase my approach to problem-solving.</p>
    <ul class="mt-16 space-y-32">
        {#each { length: 5 } as _}
            <li class="flex even:flex-row-reverse *:flex-1 gap-16">
                <div>
                    <p class="capitalize text-sm text-base-fg-muted">Productivity app</p>
                    <h3>Project Management Website</h3>
                    <p class="text-sm text-base-fg-muted">2025</p>
                    <p class="mt-6 text-pretty">
                        A web application designed to streamline project management, featuring task
                        tracking, team collaboration, and progress visualization.
                    </p>
                    <ul class="mt-6 flex flex-wrap gap-2">
                        {#each ['ASP.NET Core', 'FastEndpoints', 'Entity Framework Core', 'SignalR', 'SvelteKit', 'PostgreSQL', 'Vertical Slice Architecture', 'NATS.io', 'Cloudflare R2', 'Cloudflare Workers'] as tech (tech)}
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
                <img
                    src="https://placehold.co/1920x1080"
                    alt="Demo screen"
                    class="min-w-0 h-auto"
                />
            </li>
        {/each}
    </ul>
</Section>
