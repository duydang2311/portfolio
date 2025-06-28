<div class="bg-squares text-base-border-light dark:text-base-border-dark"></div>

<style>
    @keyframes animate-bg-squares {
        0% {
            background-position: 0 0;
        }
        100% {
            background-position: 0 4rem;
        }
    }

    .bg-squares {
        width: 100%;
        height: 100%;

        /* use currentColor because @variant doesnt work in svelte component even with @reference */
        background-image:
            repeating-linear-gradient(
                to right,
                currentColor 0,
                currentColor 1px,
                transparent 1px,
                transparent 4rem
            ),
            repeating-linear-gradient(
                to bottom,
                currentColor 0,
                currentColor 1px,
                transparent 1px,
                transparent 4rem
            );
        background-size: 4rem 4rem;
        animation: animate-bg-squares 1s linear infinite;
    }
</style>
