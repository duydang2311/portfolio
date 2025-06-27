<div class="bg-squares"></div>

<style>
    .bg-squares {
        --_border: var(--color-base-border-light);
        @variant dark {
            --_border: var(--color-base-border-dark);
        }

        width: 100%;
        height: 100%;

        background-image:
            repeating-linear-gradient(
                to right,
                var(--_border) 0,
                var(--_border) 1px,
                transparent 1px,
                transparent 4rem
            ),
            repeating-linear-gradient(
                to bottom,
                var(--_border) 0,
                var(--_border) 1px,
                transparent 1px,
                transparent 4rem
            );
        background-size: 4rem 4rem;
    }
</style>
