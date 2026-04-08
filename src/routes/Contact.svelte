<script lang="ts">
	import {
		ArrowTopRight,
		Check,
		Clipboard,
		Discord,
		GitHub,
		Gmail,
		SoundCloud
	} from '$lib/components/icons';

	let clipboardTimeout = $state.raw(0);
</script>

<section class="py-6">
	<div class="w-full">
		<div class="px-4 text-pretty lg:px-6">
			<p class="font-display text-xl font-semibold text-fg-emph">3. Contact</p>
			<p class="mt-1">I'm always open to new opportunities, feedback, or a quick chat.</p>
		</div>
		<div
			class="mt-4 flex flex-wrap gap-px *:h-48 *:flex-1 *:outline *:outline-surface-border *:hover:z-1"
		>
			<a
				href="mailto:duyda.himself@gmail.com"
				aria-label="duydang2311 github user"
				target="_blank"
				class="c-card c-card--clickable flex flex-col justify-between p-4 lg:p-6"
			>
				<Gmail class="size-10 fill-current" />
				<div class="flex items-center justify-between gap-8">
					<span>duyda.himself@gmail.com</span>
					<ArrowTopRight class="shrink-0" />
				</div>
			</a>
			<a
				href="https://github.com/duydang2311"
				aria-label="duydang2311 github user"
				target="_blank"
				class="c-card c-card--clickable flex flex-col justify-between p-4 lg:p-6"
			>
				<GitHub class="size-10 fill-current" />
				<div class="mt-16 flex items-center justify-between gap-8">
					<span>duydang2311</span>
					<ArrowTopRight class="shrink-0" />
				</div>
			</a>
			<button
				type="button"
				class="c-card c-card--clickable flex flex-col justify-between p-4 text-left lg:p-6"
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
				<div class="flex items-end justify-between gap-8">
					<div>
						<p class="text-fg-muted text-xs text-nowrap">UID: 287955978215882752</p>
						<p>duydang</p>
					</div>
					{#if clipboardTimeout === 0}
						<Clipboard class="shrink-0" />
					{:else}
						<Check class="shrink-0 text-green-700" />
					{/if}
				</div>
			</button>
			<a
				href="https://soundcloud.com/duydang12"
				aria-label="duydang soundcloud user"
				target="_blank"
				class="c-card c-card--clickable flex flex-col justify-between p-4 lg:p-6"
			>
				<SoundCloud class="size-10 fill-current" />
				<div class="mt-16 flex items-center justify-between gap-8">
					<span>duydang12</span>
					<ArrowTopRight class="shrink-0" />
				</div>
			</a>
		</div>
	</div>
</section>
