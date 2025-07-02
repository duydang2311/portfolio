<script>
    import GitHub from "$lib/components/icons/GitHub.svelte";
    import SoundCloud from "$lib/components/icons/SoundCloud.svelte";
    import { Mail } from "lucide-svelte";

</script>
<footer class="border-t border-t-base-border-light dark:border-t-base-border-dark">
    <div class="container flex justify-between mx-auto gap-8 p-8">
        <span class="text-sm uppercase">
        © 2025 Duy Dang
        </span>
        <div class="flex gap-4">
            <a href="https://github.com/duydang2311" target="_blank" class="c-button" aria-label="GitHub">
                <GitHub fill="currentColor" class="size-6 dark:invert-0" />
            </a>
            <a href="https://soundcloud.com/duydang12" target="_blank" class="c-button" aria-label="SoundCloud">
                <SoundCloud fill="currentColor" class="size-6 dark:invert-0" />
            </a>
            <a href="mailto:duydang2412@gmail.com" class="c-button" aria-label="Mail">
                <Mail class="size-6" />
            </a>
        </div>
    </div>
</footer>