<script>
    import Gmail from '~icons/custom/gmail';
    import GitHub from '~icons/custom/github';
    import Discord from '~icons/custom/discord';
    import MoveUpRight from '~icons/lucide/move-up-right';
</script>

<main>
    <h1 class="text-2xl font-medium">04 Contact</h1>
    <p class="text-sm">Open to new opportunities, feedback, or a quick chat — drop me a message.</p>
    <div class="mt-8 flex gap-4 flex-wrap mt-4 *:basis-72 *:h-48">
        <a
            href="mailto:duyda.himself@gmail.com"
            aria-label="duydang2311 github user"
            class="c-card c-card--clickable p-4 flex flex-col justify-between"
        >
            <Gmail />
            <div class="flex justify-between items-center gap-4">
                <span>duyda.himself@gmail.com</span>
                <MoveUpRight />
            </div>
        </a>
        <a
            href="https://github.com/duydang2311"
            aria-label="duydang2311 github user"
            class="c-card c-card--clickable p-4 flex flex-col justify-between"
        >
            <GitHub />
            <div class="mt-16 flex justify-between items-center gap-4">
                <span>duydang2311</span>
                <MoveUpRight />
            </div>
        </a>
        <div class="c-card p-4 flex flex-col justify-between">
            <Discord />
            <div>
                <p class="text-base-fg-muted text-xs">UID: 287955978215882752</p>
                <p>duydang</p>
            </div>
        </div>
    </div>
</main>
