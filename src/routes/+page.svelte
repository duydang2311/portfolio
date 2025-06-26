<script lang="ts">
    import GitHub from '$lib/components/icons/GitHub.svelte';
    import Section from '$lib/components/Section.svelte';
    import About from './About.svelte';
    import Experience from './Experience.svelte';
</script>

<main>
    <Section class="max-w-102 py-20 px-4 mx-auto w-fit h-screen">
        <h2 class="uppercase font-display text-base-fg-muted">Full-stack Developer</h2>
        <div
            class="text-7xl mt-4 font-display font-black text-base-fg-dark dark:text-base-fg-light"
        >
            <p>Creating</p>
            <p>Digital</p>
            <p>Experiences</p>
        </div>
        <p class="mt-8">
            Crafting innovative solutions through code, design, and strategic thinking. Specialized
            in modern web technologies and user-centered development.
        </p>
        <div class="flex gap-4 mt-8 items-center">
            <a
                href="#works"
                class="capitalize px-6 h-12 rounded-full bg-primary text-primary-fg font-display content-center"
            >
                View works
            </a>
            <a
                target="_blank"
                href="https://github.com/duydang2311"
                class="size-12 p-2 rounded-full bg-base border border-base-border-light"
            >
                <GitHub />
            </a>
        </div>
    </Section>
    <About />
    <Experience />
</main>
