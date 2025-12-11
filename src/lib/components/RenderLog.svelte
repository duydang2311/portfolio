<script lang="ts" module>
    import type { Component } from 'svelte';
    import CmdHelp from './CmdHelp.svelte';
    import CmdUnknown from './CmdUnknown.svelte';
    import CmdWhoAmI from './CmdWhoAmI.svelte';

    const snippets: Record<string, Component> = {
        CMD_HELP: CmdHelp,
        CMD_UNKNOWN: CmdUnknown,
        CMD_WHO_AM_I: CmdWhoAmI,
        CMD_PFP: CmdPfp,
    };
</script>

<script lang="ts">
    import type { LogSnippet } from '$lib/shell/types';
    import CmdPfp from './CmdPfp.svelte';

    interface Props {
        log: LogSnippet;
    }

    const { log }: Props = $props();

    const Current = $derived(snippets[log.snippet]);
</script>

{#if Current}
    <Current {...log.props} />
{/if}
