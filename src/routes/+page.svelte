<script lang="ts">
	import AboutMe from './AboutMe.svelte';
	import Greetings from './Greetings.svelte';
	import Hero from './Hero.svelte';
	import SwitchThemeButton from './SwitchThemeButton.svelte';
	import Works from './Works.svelte';
</script>

<div class="flex h-screen flex-col">
	<div
		class="flex h-full flex-col divide-y divide-surface-border overflow-auto lg:flex-row lg:divide-x"
	>
		<div
			class="relative top-0 flex flex-row-reverse justify-between bg-surface-subtle lg:sticky lg:flex-col lg:justify-start"
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="absolute top-0 left-0 size-full"
				><defs
					><pattern
						id="a"
						width="30"
						height="30"
						patternTransform="scale(2)"
						patternUnits="userSpaceOnUse"
						><path
							fill="none"
							stroke="var(--color-fg)"
							opacity="0.02"
							stroke-width="1"
							d="M0 22.5h30v15H0zm15-15h30v15H15m-30-15h30v15h-30zm15-15h30v15H0z"
						/></pattern
					></defs
				><rect width="800%" height="800%" fill="url(#a)" transform="translate(0 -15)" /></svg
			>
			<div class="flex flex-col items-end justify-between lg:items-start">
				<header class="relative px-6 py-4 lg:px-4 lg:py-2">
					<SwitchThemeButton />
				</header>
				<div class="relative ml-auto min-w-76 self-end px-6 pb-4 lg:px-4">
					<Greetings />
				</div>
			</div>
			<div class="relative flex-1 content-center px-6 py-4">
				<Hero />
			</div>
		</div>
		<div class="max-h-screen flex-1">
			<main>
				<div
					class="grid grid-cols-[repeat(auto-fit,minmax(min(100%,40rem),1fr))] gap-px bg-surface-border pr-px *:min-w-0 *:bg-surface"
				>
					<AboutMe />
					<Works />
				</div>
			</main>
		</div>
	</div>
</div>
