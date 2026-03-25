<script lang="ts">
	import AboutMe from './AboutMe.svelte';
	import Hero from './Hero.svelte';
</script>

<div class="flex h-screen flex-col">
	<div class="flex h-full divide-x divide-surface-border">
		<div class="relative flex min-w-96 flex-col bg-surface-subtle">
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
			<div class="relative px-4 py-1">
				<p class="font-display text-fg-muted">/home/duydang</p>
			</div>
			<div class="relative flex-1 content-center px-8">
				<Hero />
			</div>
		</div>
		<div class="max-h-full flex-1 overflow-auto">
			<!-- <header class="border-b border-b-surface-border">
				<nav>
					<ul class="flex divide-x divide-surface-border *:flex-1">
						{#each ['Home', 'Works'] as item}
							<li>
								<a href="#" class="block px-4 py-1 text-center text-sm hover:bg-base-subtle">
									{item}
								</a>
							</li>
						{/each}
					</ul>
				</nav>
			</header> -->
			<main class="h-full flex-1 overflow-hidden">
				<!-- grid-cols-[repeat(auto-fit,minmax(36rem,1fr))] -->
				<div
					class="grid h-full grid-cols-[repeat(auto-fit,minmax(40rem,1fr))] divide-x divide-surface-border overflow-auto *:min-w-148"
				>
					<AboutMe />
					<AboutMe />
				</div>
			</main>
		</div>
	</div>
</div>
