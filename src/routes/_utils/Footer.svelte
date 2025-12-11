<footer class="flex justify-between items-end gap-4 text-sm">
    <div class="flex">
        <div>
            <div class="flex gap-0.5">
                {#each ['1', '2', '3'] as number}
                    <div class="border border-b-2 border-base-fg px-1">{number}</div>
                {/each}
            </div>
            To page
        </div>
    </div>
    <div class="text-base-fg-muted">© 2025 Dang Quoc Duy</div>
</footer>
