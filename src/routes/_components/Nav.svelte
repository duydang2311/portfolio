<script lang="ts">
    import { page } from '$app/state';
</script>

<div class="flex gap-4">
    {#each [{ label: 'Home', href: '/' }, { label: 'Works', href: '/works' }, { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }] as item, i (item.href)}
        <a
            href={item.href}
            data-active={page.url.pathname === item.href ? '' : undefined}
            class="c-clickable text-base-fg-muted hover:text-base-fg data-active:bg-base-fg data-active:text-base-strong data-active:animate-highlight data-active:font-semibold"
        >
            <div class="c-clickable">{(i + 1).toString().padStart(2, '0')} {item.label}</div>
        </a>
    {/each}
</div>
