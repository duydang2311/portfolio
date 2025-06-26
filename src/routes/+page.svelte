<script lang="ts">
    import GitHub from '$lib/components/icons/GitHub.svelte';
    import Section from '$lib/components/Section.svelte';
    import About from './About.svelte';
    import Experience from './Experience.svelte';
</script>

<main>
    <Section class="py-20 px-4 content-center">
        <div class="mx-auto w-fit">
            <h2 class="text-p uppercase font-display text-base-fg-muted">Software Engineer</h2>
            <div
                class="text-7xl md:text-9xl mt-4 font-display font-black text-base-fg-dark dark:text-base-fg-light"
            >
                <p class="text-nowrap">Next-gen</p>
                <p class="text-center">Codecraft</p>
            </div>
            <p class="mt-8 text-pretty">
                Learning to write code that works, reads well, and feels right — so it's not awkward
                when we meet again.
            </p>
            <div class="flex gap-4 mt-8 items-center">
                <a
                    href="#works"
                    class="capitalize px-6 h-12 rounded-full bg-primary text-primary-fg font-display content-center font-medium"
                >
                    View works
                </a>
                <a
                    target="_blank"
                    href="https://github.com/duydang2311"
                    class="size-12 p-2 rounded-full border border-base-border-light dark:border-base-border-dark bg-base-light"
                >
                    <GitHub />
                </a>
            </div>
        </div>
    </Section>
    <div class="grid grid-cols-[repeat(auto-fit,minmax(36rem,1fr))] gap-16">
        <About />
        <Experience />
    </div>
</main>
