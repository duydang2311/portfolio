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
    import { navigating } from '$app/state';

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

<div
    style:--_chars={'booting your OS... '.length}
    style:--_width={'booting your OS... '.length + 'ch'}
    class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-typewriter leading-none"
>
    booting your OS...
</div>
<div class="h-dvh flex flex-col py-4 gap-4 animate-intro">
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

<style>
    @keyframes typewriter {
        from {
            width: 0;
        }
    }

    @keyframes typewriter-blink {
        50% {
            border-color: transparent;
        }
    }

    @keyframes intro-out {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
    }

    @keyframes intro {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .animate-intro {
        opacity: 0;
        animation: intro 0.05s 1.35s step-start 2 forwards;
    }

    .animate-typewriter {
        width: var(--_width);
        overflow: hidden;
        white-space: nowrap;
        border-color: var(--color-base-fg);
        border-right: 0.5rem solid;
        animation:
            typewriter 0.75s forwards steps(var(--_chars)),
            typewriter-blink 0.5s step-end infinite alternate,
            intro-out 0.08s 1.25s step-end 2 forwards;
    }
</style>
