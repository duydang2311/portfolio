<script lang="ts">
    import Section from '$lib/components/Section.svelte';
    import type { Snippet } from 'svelte';
</script>

{#snippet exp(title: string, company: string, start: string, end: string, body: Snippet)}
    <div class="flex justify-between gap-4">
        <div>
            <h3>{title}</h3>
            <p class="text-base-fg-muted text-sm">{company}</p>
        </div>
        <p class="text-base-fg-muted text-sm">
            {start} — {end}
        </p>
    </div>
    <div class="text-sm mt-2">
    {@render body()}
    </div>
{/snippet}

{#snippet futurify()}
<ul class="list-disc pl-4">
    <li>
        Responsible for implementing new features and fixing application bugs as assigned, resulted in more than 30 tasks
        resolved in 3 months of internship.
    </li>
    <li>
        Integrated Amazon S3 with presigned URL for building a file uploading/storing service.
    </li>
    <li>
        Optimized React application by preventing unnecessary re-renders in various components.
    </li>
    <li>
        Utilized Git and BitBucket for source control in trunk-based development style.
    </li>
    <li>
        In charge of developing a mail system to send/manage emails in-application using SMTP and IMAP protocols,
        Google Pub/Sub and Webhooks.
    </li>
</ul>

{/snippet}

<Section class="container mx-auto">
    <h2 class="text-2xl font-semibold">Experience</h2>
    <ul class="mt-4">
        <li>
    {@render exp('Full-stack Developer Intern', 'Futurify Company', 'Aug', 'Nov 2023', futurify)}
        </li>
    </ul>
</Section>
