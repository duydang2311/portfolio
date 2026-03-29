<script lang="ts">
	import { createPopover, createSlider } from '$lib/components/builders.svelte';
	import { ColorWheel } from '$lib/components/icons';
	import { portal } from '@zag-js/svelte';

	let styleEl: HTMLStyleElement | null = null;
	const id = $props.id();
	const popover = createPopover({ id: `popover--${id}` });
	const slider = createSlider({
		id: `slider--${id}`,
		defaultValue: [142],
		min: 0,
		max: 360,
		onValueChange(details) {
			if (styleEl == null) {
				styleEl = document.createElement('style');
				document.head.appendChild(styleEl);
			}
			const hue = details.value[0];
			styleEl.textContent = `
:root {
--color-surface: oklch(99% 0.004 ${hue});
--color-surface-subtle: oklch(98% 0.006 ${hue});
--color-surface-emph: oklch(96% 0.01 ${hue});
--color-surface-border: oklch(94% 0.004 ${hue});

--color-fg: oklch(33% 0.01 ${hue});
--color-fg-subtle: oklch(45% 0.01 ${hue});
--color-fg-emph: oklch(22% 0.01 ${hue});
--color-fg-muted: oklch(60% 0.01 ${hue});

--color-base: oklch(96% 0.004 ${hue});
--color-base-subtle: oklch(94.5% 0.004 ${hue});
--color-base-emph: oklch(93% 0.01 ${hue});
--color-base-border: oklch(91% 0.004 ${hue});

--color-primary: oklch(97% 0.04 ${hue});
--color-primary-subtle: oklch(95.5% 0.06 ${hue});
--color-primary-emph: oklch(94% 0.08 ${hue});
--color-primary-border: oklch(92% 0.06 ${hue});
--color-primary-fg: oklch(46.6% 0.15 ${hue});
}

:root:where([data-theme=dark], [data-theme=dark] *) {
--color-surface: oklch(17% 0.004 ${hue});
--color-surface-subtle: oklch(20% 0.006 ${hue});
--color-surface-emph: oklch(23% 0.01 ${hue});
--color-surface-border: oklch(25% 0.004 ${hue});

--color-fg: oklch(82% 0.01 ${hue});
--color-fg-subtle: oklch(72% 0.01 ${hue});
--color-fg-emph: oklch(96% 0.01 ${hue});
--color-fg-muted: oklch(60% 0.01 ${hue});

--color-base: oklch(23% 0.004 ${hue});
--color-base-subtle: oklch(25% 0.004 ${hue});
--color-base-emph: oklch(27% 0.01 ${hue});
--color-base-border: oklch(29% 0.004 ${hue});

--color-primary: oklch(24% 0.04 ${hue});
--color-primary-subtle: oklch(27% 0.06 ${hue});
--color-primary-emph: oklch(30% 0.08 ${hue});
--color-primary-border: oklch(30% 0.04 ${hue});
--color-primary-fg: oklch(63.5% 0.175 ${hue});
}
	`;
		}
	});
	const currentHue = $derived(slider.api.value[0]);
</script>

{#snippet item(hue: number)}
	<button
		type="button"
		data-selected={currentHue === hue ? '' : undefined}
		class="h-10 rounded-sm border border-transparent opacity-20 transition duration-75 hover:opacity-60 data-selected:opacity-100 data-selected:ring data-selected:ring-primary-fg data-selected:ring-offset-1 data-selected:ring-offset-surface"
		style="background-color: oklch(46.6% 0.15 {hue});"
		onclick={() => {
			slider.api.setValue([hue]);
		}}
		aria-label="Set hue to {hue}"
	></button>
{/snippet}

<div>
	<button
		{...popover.api.getTriggerProps()}
		class="size-6 rounded-sm text-primary-fg hover:bg-base-subtle active:bg-base-emph"
	>
		<ColorWheel class="mx-auto size-5" />
	</button>
	<div use:portal={{ disabled: !popover.api.portalled }} {...popover.api.getPositionerProps()}>
		<div
			{...popover.api.getContentProps()}
			class="rounded-md border border-base-border bg-surface px-4 py-2 shadow-sm"
		>
			<div {...slider.api.getRootProps()} class="gap-2">
				<div>
					<label {...slider.api.getLabelProps()} class="text-sm font-medium text-fg-subtle">
						Hue tweaker
					</label>
					<p class="text-fg-muted text-sm">Try a new refreshing look for the site.</p>
				</div>
				<div class="mt-2 grid grid-cols-3 gap-1">
					{@render item(0)}
					{@render item(60)}
					{@render item(120)}
					{@render item(180)}
					{@render item(240)}
					{@render item(300)}
				</div>
				<div {...slider.api.getControlProps()} class="relative mt-2 flex-1">
					<div {...slider.api.getTrackProps()}>
						<div
							{...slider.api.getRangeProps()}
							class="h-2 w-full rounded-full border border-base-border"
							style="background: linear-gradient(to right, oklch(46.6% 0.15 0) 0%, oklch(46.6% 0.15 60) 17%, oklch(46.6% 0.15 120) 33%, oklch(46.6% 0.15 180) 50%, oklch(46.6% 0.15 240) 67%, oklch(46.6% 0.15 300) 83%, oklch(46.6% 0.15 360) 100%);"
						></div>
					</div>
					{#each slider.api.value as _, index}
						{@const thumbProps = { ...slider.api.getThumbProps({ index }) }}
						<div
							{...thumbProps}
							class="absolute top-1/2 left-0 size-4 -translate-y-1/2 rounded-full border border-base-border"
							style="background-color: oklch(46.6% 0.15 {currentHue}); {thumbProps.style}"
						>
							<input {...slider.api.getHiddenInputProps({ index })} />
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
