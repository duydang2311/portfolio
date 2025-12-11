<script lang="ts">
    import '@fontsource-variable/inconsolata';
    import '../app.css';

    import { goto, onNavigate } from '$app/navigation';
    import Nav from './_utils/Nav.svelte';
    import Footer from './_utils/Footer.svelte';
    import {
        addCommandHandler,
        cmdClearHandler,
        cmdHelpHandler,
        cmdPfpHandler,
        cmdWhoAmIHandler,
    } from '$lib/shell/cmds';
    import { addLog } from '$lib/shell/logs';
    import { logs } from '$lib/shell/states.svelte';

    const { children } = $props();
    let transitionEl = $state.raw<HTMLDivElement>();

    onNavigate((navigation) => {
        const el = transitionEl;
        if (!el) {
            return;
        }
        const from = navigation.from?.url.pathname.split('/', 2)[1];
        const to = navigation.to?.url.pathname.split('/', 2)[1];
        if (from !== to) {
            el.classList.remove('animate-slide-down-slow');
            requestAnimationFrame(() => {
                el.classList.add('animate-slide-down-slow');
            });
        }
    });

    const addLogFn = addLog(logs);
    [
        cmdHelpHandler(addLogFn),
        cmdClearHandler(logs),
        cmdWhoAmIHandler(addLogFn),
        cmdPfpHandler(addLogFn),
    ].forEach(addCommandHandler);
</script>

<svelte:window
    onkeyup={(e) => {
        if (document.activeElement?.getAttribute('contenteditable') === 'true') {
            return;
        }
        switch (e.key) {
            case '1':
                goto('/');
                break;
            case '2':
                goto('/works');
                break;
            case '3':
                goto('/about');
                break;
            case '4':
                goto('/contact');
                break;
        }
    }}
/>

<div class="h-dvh flex flex-col py-4 gap-4">
    <div class="px-8 text-sm">
        <Nav />
    </div>
    <div class="px-8 flex-1 flex flex-col overflow-hidden gap-4">
        <div class="relative overflow-hidden flex-1 flex flex-col">
            {@render children()}
            <div
                bind:this={transitionEl}
                class="absolute inset-0 bg-base animate-slide-down-slow"
            ></div>
        </div>
        <Footer />
    </div>
</div>
