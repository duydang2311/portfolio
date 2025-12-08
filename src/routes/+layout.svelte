<script lang="ts">
    import '@fontsource-variable/inconsolata';
    import '../app.css';
    import { goto, onNavigate } from '$app/navigation';
    import Nav from './_components/Nav.svelte';
    import Footer from './_components/Footer.svelte';

    const { children } = $props();
    let transitioning = $state.raw(false);

    onNavigate(() => {
        transitioning = true;
    });
</script>

<svelte:window
    onkeyup={(e) => {
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

<div class="h-screen flex flex-col py-4 gap-2">
    <div class="px-8 text-sm">
        <Nav />
    </div>
    <div class="px-8 flex-1 flex flex-col overflow-hidden gap-4">
        <div class="relative overflow-hidden flex-1 max-h-full">
            <div>
                {@render children()}
            </div>
            <div
                class="absolute inset-0 bg-base"
                style={transitioning
                    ? 'animation: page-transition 0.2s steps(6, jump-start);'
                    : 'transform: translateY(100%); bottom: 0;'}
                onanimationend={() => {
                    transitioning = false;
                }}
            ></div>
        </div>
        <Footer />
    </div>
</div>
