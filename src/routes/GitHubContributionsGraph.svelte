<script lang="ts">
	import { getGitHubContribution } from '$lib/remote/github.remote';
	import { useRuntime } from '$lib/runtime';
	import invariant from 'tiny-invariant';

	const runtime = useRuntime();
</script>

{#await getGitHubContribution()}
	<div class="flex h-28 items-center justify-center text-sm text-fg-muted">
		Loading GitHub contributions...
	</div>
{:then contribution}
	<div class="mx-auto flex max-w-5xl flex-col gap-x-8 gap-y-2 xl:flex-row">
		<div class="flex flex-col">
			<div class="text-xs tracking-wide text-nowrap text-fg-muted uppercase">
				Recent contributions
			</div>
			<div class="font-display text-4xl font-bold tracking-tighter">
				{contribution.total.lastYear ?? 0}
			</div>
		</div>
		<div class="flex-1 shrink">
			<canvas
				class="h-0 w-full"
				{@attach (node) => {
					const contrib = contribution;
					if (!contrib) {
						return;
					}
					const rect = node.getBoundingClientRect();
					const GAP = 2;
					const ROWS = 7;
					const PADDING = 1;
					const COLS = Math.ceil(contrib.contributions.length / 7);
					let styles = getComputedStyle(node);
					let color = styles.getPropertyValue('--color-primary-fg').trim();
					const opacities = ['10%', '30%', '50%', '70%', '100%'];
					node.width = rect.width;
					node.height = getTotalHeight(getBoxWidth(rect.width));
					node.style.height = `${node.height}px`;

					const observer = new ResizeObserver((entries) => {
						const size = entries[0].devicePixelContentBoxSize[0];
						update(size.inlineSize);
					});
					observer.observe(node);

					function getBoxWidth(width: number) {
						return (width - GAP * (COLS - 1) - PADDING * 2) / COLS;
					}

					function getTotalHeight(boxWidth: number) {
						return boxWidth * ROWS + GAP * (ROWS - 1) + PADDING * 2;
					}

					function update(width: number) {
						const WIDTH = getBoxWidth(width);
						node.width = width;
						node.height = getTotalHeight(WIDTH);
						node.style.height = `${node.height}px`;
						redraw();
					}

					function redraw() {
						invariant(contrib, 'contrib must not be null');
						const WIDTH = getBoxWidth(node.width);
						const HEIGHT = WIDTH;

						let ctx = node.getContext('2d')!;
						ctx.clearRect(0, 0, node.width, node.height);
						let x = PADDING,
							y = PADDING;
						for (let i = 0, size = contrib.contributions.length; i < size; ++i) {
							const c = contrib.contributions[i];
							if (i !== 0 && i % 7 === 0) {
								x += WIDTH + GAP;
								y = PADDING;
							}
							ctx.fillStyle = `color-mix(in oklch, ${color} ${opacities[c.level]}, transparent)`;
							ctx.beginPath();
							ctx.roundRect(x, y, WIDTH, HEIGHT, WIDTH / 4);
							ctx.fill();
							ctx.closePath();
							y += HEIGHT + GAP;
						}
					}

					$effect(() => {
						// eslint-disable-next-line @typescript-eslint/no-unused-expressions
						runtime.hue;
						styles = getComputedStyle(node);
						color = styles.getPropertyValue('--color-primary-fg').trim();
						redraw();
					});
					return () => {
						observer.disconnect();
					};
				}}
			></canvas>
			<div class="mt-2 flex justify-between gap-8">
				<span class="text-xs text-fg-muted">
					{new Date(contribution.contributions[0].date).toLocaleDateString(undefined, {
						dateStyle: 'medium'
					})}
				</span>
				<span class="text-xs text-fg-muted">
					{new Date(contribution.contributions.at(-1)!.date).toLocaleDateString(undefined, {
						dateStyle: 'medium'
					})}
				</span>
			</div>
		</div>
	</div>
{/await}
