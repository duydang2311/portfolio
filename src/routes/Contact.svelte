<script lang="ts">
    import Clipboard from '$lib/components/Clipboard.svelte';
    import Discord from '$lib/components/icons/Discord.svelte';
    import GitHub from '$lib/components/icons/GitHub.svelte';
    import SoundCloud from '$lib/components/icons/SoundCloud.svelte';
    import Section from '$lib/components/Section.svelte';
    import { ClipboardCheck, ClipboardIcon, ExternalLink, Mail } from 'lucide-svelte';
</script>

<Section class="content-center">
    <h2 class="font-semibold text-center">Contact</h2>
    <p class="text-center">
        Open to new opportunities, feedback, or a quick chat — drop me a message.
    </p>

    <ul class="w-fit mx-auto mt-8 space-y-2">
        <li class="flex items-center gap-4">
            <Mail class="text-base-fg-muted" />
            <a href="mailto:duydang2412@gmail.com" class="group c-link">
                duydang2412@gmail.com
                <ExternalLink
                    class="transition duration-150 inline opacity-0 group-hover:opacity-100"
                />
            </a>
        </li>
        <li class="flex items-center gap-4">
            <Discord class="size-6 fill-base-fg-muted" />
            <Clipboard props={{ value: 'duydang' }}>
                {#snippet children(api)}
                    <button {...api.getTriggerProps()} class="c-button group relative">
                        <span>duydang</span>
                        <span
                            data-copied={api.copied ? '' : undefined}
                            class="transition absolute -right-2 translate-x-full top-1/2 -translate-y-1/2 text-nowrap text-sm text-base-fg-muted opacity-0 group-hover:opacity-100 data-[copied]:opacity-100"
                        >
                            {#if api.copied}
                                <ClipboardCheck />
                            {:else}
                            Click to copy
                                <ClipboardIcon class="inline" />
                            {/if}
                        </span>
                    </button>
                {/snippet}
            </Clipboard>
        </li>
        <li class="flex items-center gap-4">
            <GitHub class="size-6 fill-base-fg-muted" />
            <a href="https://github.com/duydang2311" target="_blank" class="group c-link">
                duydang2311
                <ExternalLink
                    class="transition duration-150 inline opacity-0 group-hover:opacity-100"
                />
            </a>
        </li>
        <li class="flex items-center gap-4">
            <SoundCloud class="size-6 fill-base-fg-muted" />
            <a href="https://soundcloud.com/duydang12" target="_blank" class="group c-link">
                duydang12
                <ExternalLink
                    class="transition duration-150 inline opacity-0 group-hover:opacity-100"
                />
            </a>
        </li>
    </ul>
</Section>
