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
        <li>
            <a
                href="mailto:duydang2412@gmail.com"
                class="relative group c-link inline-flex items-center gap-4 not-hover:not-active:text-base-fg"
            >
                <Mail />
                <span>
                    duydang2412@gmail.com
                    <ExternalLink
                        class="transition duration-150 text-link absolute -right-2 translate-x-full top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                    />
                </span>
            </a>
        </li>
        <li>
            <a
                href="https://github.com/duydang2311"
                target="_blank"
                class="relative group c-link inline-flex items-center gap-4 not-hover:not-active:text-base-fg"
            >
                <GitHub fill="currentColor" class="size-6 !invert-0" />
                <div>
                    duydang2311
                    <ExternalLink
                        class="transition duration-150 text-link absolute -right-2 translate-x-full top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                    />
                </div>
            </a>
        </li>
        <li>
            <a
                href="https://soundcloud.com/duydang12"
                target="_blank"
                class="relative group c-link inline-flex items-center gap-4 not-hover:not-active:text-base-fg"
            >
                <SoundCloud fill="currentColor" class="size-6 !invert-0" />
                <div>
                    duydang12
                    <ExternalLink
                        class="transition duration-150 text-link absolute -right-2 translate-x-full top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                    />
                </div>
            </a>
        </li>
        <li>
            <Clipboard props={{ value: 'duydang' }}>
                {#snippet children(api)}
                    <button
                        {...api.getTriggerProps()}
                        class="c-button group relative flex items-center gap-4"
                    >
                        <Discord fill="currentColor" class="size-6 !invert-0" />
                        <div>
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
                        </div>
                    </button>
                {/snippet}
            </Clipboard>
        </li>
    </ul>
</Section>
