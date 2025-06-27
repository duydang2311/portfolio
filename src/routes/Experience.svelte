<script lang="ts">
    import Section from '$lib/components/Section.svelte';
    import type { Snippet } from 'svelte';
    import { ExternalLink } from 'lucide-svelte';
</script>

{#snippet exp(
    title: string,
    company: string,
    companyHref: string,
    start: string,
    end: string,
    body: Snippet
)}
    <div
        class="relative flex flex-col @xl:flex-row justify-between items-baseline gap-x-4 gap-y-2 pb-2"
    >
        <div>
            <h3>{title}</h3>
            <a
                href={companyHref}
                target="_blank"
                class="inline-block group text-link hover:text-link-fg bg-gradient-to-r from-link to-link -mx-1 px-1
                bg-no-repeat transition-[color_background-size_box-shadow] duration-150 [background-size:0%_100%] hover:[background-size:100%_100%]"
            >
                <span>
                    {company}
                </span>
                <ExternalLink class="hidden group-hover:inline" />
            </a>
        </div>
        <p class="text-base-fg-muted text-sm text-nowrap">
            {start} — {end}
        </p>
        <div
            class="absolute inset-x-0 bottom-0 h-px bg-base-border-light dark:bg-base-border-dark"
        ></div>
        <div
            class="absolute h-12 left-0 -bottom-10 w-px bg-gradient-to-b from-base-border-light dark:from-base-border-dark to-transparent"
        ></div>
    </div>
    <div class="text-sm mt-4 px-2">
        {@render body()}
    </div>
{/snippet}

{#snippet futurify()}
    <ul class="list-disc pl-4 space-y-4">
        <li>Delivered 30+ feature updates and bug fixes over a 3-month internship.</li>
        <li>Integrated Amazon S3 with presigned URLs for file uploads.</li>
        <li>Improved React performance by reducing unnecessary re-renders.</li>
        <li>Used Git and Bitbucket with trunk-based development.</li>
        <li>Built an in-app mail system using SMTP, IMAP, Pub/Sub, and webhooks.</li>
    </ul>
{/snippet}

<Section class="@container">
    <h2 class="font-semibold">Experience</h2>
    <ul class="mt-2">
        <li>
            {@render exp(
                'Full-stack Developer Intern',
                'Futurify Company',
                'https://www.futurify.io/',
                'Aug',
                'Nov 2023',
                futurify
            )}
        </li>
    </ul>
</Section>
