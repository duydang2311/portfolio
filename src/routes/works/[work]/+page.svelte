<script lang="ts">
    import { parseMarkdownToHtml } from '~/lib/works/markdown.js';

    const { data } = $props();
</script>

<div class="prose max-w-none">
    {#await parseMarkdownToHtml(data.work.markdown) then html}
        {@html html}
    {/await}
</div>
