<script lang="ts">
    import BgSquares from '$lib/components/BgSquares.svelte';
    import GitHub from '$lib/components/icons/GitHub.svelte';
    import Section from '$lib/components/Section.svelte';
    import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
    import About from './About.svelte';
    import Contact from './Contact.svelte';
    import Experience from './Experience.svelte';
    import Hobby from './Hobby.svelte';
</script>

<header class="z-10 sticky top-0">
    <div
        class="backdrop absolute inset-x-0 h-[200%] bg-base/80 pointer-events-none backdrop-blur-md"
    ></div>
    <div
        class="backdrop-edge absolute inset-x-0 h-full translate-y-full bg-base-fg/5 pointer-events-none"
    ></div>

    <div
        class="page-header relative h-16 content-center flex justify-between gap-8 items-center container mx-auto px-4"
    >
        <p class="font-display text-base-fg-dark dark:text-base-fg-light">Duy Dang</p>
        <ThemeSwitch />
    </div>
</header>
<main>
    <Section class="relative py-20 px-4 content-center max-h-[calc(100vh-4rem)]">
        <div class="absolute inset-x-0 top-0 h-1/2 mask-b-from-black mask-b-to-transparent">
            <BgSquares />
        </div>
        <div class="relative mx-auto w-fit text-center sm:text-left">
            <h2 class="text-p uppercase font-display text-base-fg-muted">Software Engineer</h2>
            <div
                class="relative text-[size:clamp(3rem,_-0.75rem_+_18.75vw,_6.75rem)] md:text-9xl leading-none mt-4 font-display font-black text-base-fg-dark dark:text-base-fg-light"
            >
                <p class="text-nowrap">Next-gen</p>
                <p class="sm:text-right">Codecraft</p>
            </div>
            <p class="mt-8 text-pretty">
                Learning to write code that works, reads well, and feels right — so it's not awkward
                when we meet again.
            </p>
            <div class="flex gap-4 mt-8 items-center justify-center sm:justify-start">
                <a
                    href="#works"
                    class="c-button c-button--filled c-button--primary capitalize px-6 h-12 rounded-full content-center"
                >
                    View works
                </a>
                <a
                    target="_blank"
                    href="https://github.com/duydang2311"
                    class="c-button c-button--filled c-button--outlined size-12 p-2 rounded-full"
                >
                    <GitHub />
                </a>
            </div>
        </div>
    </Section>
    <div class="contents 2xl:flex 2xl:*:min-w-0 2xl:gap-16 2xl:*:flex-1">
        <About />
        <Experience />
    </div>
    <Hobby />
    <Contact />
</main>

<style>
    @keyframes shrink-page-header {
        from {
            font-size: var(--text-h4);
            max-height: 4rem;
        }
        to {
            font-size: var(--text-p);
            max-height: 3rem;
        }
    }

    .page-header {
        animation: shrink-page-header ease both;
        animation-timeline: scroll(root block);
        animation-range: 0 200px;
    }

    /* https://www.joshwcomeau.com/css/backdrop-filter/ */
    .backdrop {
        background: linear-gradient(to bottom, var(--color-base) 0%, transparent 50%);
        mask-image: linear-gradient(to bottom, black 0% 50%, transparent 50% 100%);
    }

    .backdrop-edge {
        --thickness: 2px;
        backdrop-filter: blur(8px) brightness(120%);
        mask-image: linear-gradient(
            to bottom,
            black 0,
            black var(--thickness),
            transparent var(--thickness)
        );
    }
</style>
