<script lang="ts">
    import * as clipboard from '@zag-js/clipboard';
    import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';
    import type { Snippet } from 'svelte';

    const { children, props }: { children: Snippet<[clipboard.Api<PropTypes>]>; props?: Omit<clipboard.Props, 'id'>; } = $props();
    const id = $props.id();
    const service = useMachine(clipboard.machine, {
        id,
        ...props
    });

    const api = $derived(clipboard.connect(service, normalizeProps));
</script>

{@render children(api)}
