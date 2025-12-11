<script lang="ts">
    import RenderLog from '$lib/components/RenderLog.svelte';
    import { addCommand } from '$lib/shell/cmds';
    import { addLog } from '$lib/shell/logs';
    import { logs } from '$lib/shell/states.svelte';
</script>

{#snippet prefix(type: 'command' | 'result')}
    {#if type === 'command'}
        $
    {:else}
        >
    {/if}
{/snippet}

<main class="flex-1 flex flex-col max-h-full overflow-auto">
    <h1 class="text-2xl font-medium mb-4">01 Home</h1>
    {#if logs.length > 0}
        <ol>
            {#each logs as log (log.id)}
                <li class="flex-1 flex gap-2 cursor-text">
                    {#if log.text}
                        <div class="text-base-fg-muted">
                            {@render prefix(log.type)}
                        </div>
                        <div>
                            {log.text}
                        </div>
                    {:else if log.snippet}
                        <div class="text-base-fg-muted">
                            {@render prefix(log.type)}
                        </div>
                        <div>
                            <RenderLog {log} />
                        </div>
                    {/if}
                </li>
            {/each}
        </ol>
    {/if}
    <div class="flex-1 flex gap-2 cursor-text">
        <div class="text-base-fg-muted">$</div>
        <div
            role="textbox"
            tabindex="0"
            contenteditable="true"
            class="outline-none flex-1"
            onkeypress={(e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    e.currentTarget.textContent = e.currentTarget.textContent.trim();
                    if (e.currentTarget.textContent.length === 0) {
                        return;
                    }

                    addCommand(addLog(logs))({
                        text: e.currentTarget.textContent,
                    });
                    e.currentTarget.textContent = '';
                }
            }}
        ></div>
    </div>
</main>
