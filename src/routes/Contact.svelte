<script lang="ts">
	import { ArrowTopRight, Check, Clipboard, Discord, GitHub, Gmail } from '$lib/components/icons';

	let clipboardTimeout = $state.raw(0);
</script>

<section class="py-6">
	<div class="w-full px-4 lg:px-6">
		<div>
			<p class="font-display text-xl font-semibold text-fg-emph">3. Contact</p>
			<hr class="border-surface-border" />
		</div>
		<div class="mt-4">
			<div class="text-pretty">
				<p>Open to new opportunities, feedback, or a quick chat.</p>
			</div>
		</div>
		<div
			class="mt-4 grid grid-cols-[repeat(auto-fill,minmax(min(16rem,100%),1fr))] gap-px *:h-48 *:basis-72 *:outline *:outline-surface-border *:hover:z-1"
		>
			<a
				href="mailto:duyda.himself@gmail.com"
				aria-label="duydang2311 github user"
				target="_blank"
				class="c-card c-card--clickable flex flex-col justify-between p-4"
			>
				<Gmail class="size-10 fill-current" />
				<div class="flex items-center justify-between gap-4">
					<span>duyda.himself@gmail.com</span>
					<ArrowTopRight class="shrink-0" />
				</div>
			</a>
			<a
				href="https://github.com/duydang2311"
				aria-label="duydang2311 github user"
				target="_blank"
				class="c-card c-card--clickable flex flex-col justify-between p-4"
			>
				<GitHub class="size-10 fill-current" />
				<div class="mt-16 flex items-center justify-between gap-4">
					<span>duydang2311</span>
					<ArrowTopRight class="shrink-0" />
				</div>
			</a>
			<button
				type="button"
				class="c-card c-card--clickable flex flex-col justify-between p-4 text-left"
				onclick={() => {
					navigator.clipboard.writeText('duydang');
					if (clipboardTimeout !== 0) {
						clearTimeout(clipboardTimeout);
					}
					clipboardTimeout = setTimeout(() => {
						clipboardTimeout = 0;
					}, 3000) as unknown as number;
				}}
			>
				<Discord class="size-10 fill-current" />
				<div class="flex items-end justify-between gap-4">
					<div>
						<p class="text-base-fg-muted text-xs">UID: 287955978215882752</p>
						<p>duydang</p>
					</div>
					{#if clipboardTimeout === 0}
						<Clipboard class="shrink-0" />
					{:else}
						<Check class="shrink-0 text-green-700" />
					{/if}
				</div>
			</button>
		</div>
	</div>
</section>
