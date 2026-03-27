<script lang="ts"></script>

{#snippet item(title: string, desc: string, tags: string[])}
	<button class="flex flex-col justify-between gap-4 p-4 text-left hover:bg-surface-subtle">
		<div>
			<p class="font-display text-lg font-medium text-fg-emph">{title}</p>
			<p class="mt-1 text-sm">
				{desc}
			</p>
		</div>
		<div class="flex flex-wrap gap-x-2 gap-y-1">
			{#each tags as tag}
				<div class="rounded-xs bg-base px-2 py-1 text-sm text-fg-subtle">{tag}</div>
			{/each}
		</div>
	</button>
{/snippet}

<section class="@container h-full py-6">
	<div class="w-full">
		<div class="px-4">
			<h2 class="font-display text-lg font-semibold text-fg-emph">2. Works</h2>
		</div>
		<div class="mt-4 grid gap-px *:outline *:outline-base-border @[52rem]:grid-cols-2">
			<div
				class="col-span-full bg-surface-subtle px-4 py-1 text-xs font-semibold text-fg-muted uppercase"
			>
				Application
			</div>
			{@render item(
				'sorairo',
				'A minimal, local, cross-platform music player built with Avalonia and miniaudio.',
				[
					'windows',
					'macos',
					'linux',
					'cross-platform',
					'dotnet',
					'desktop',
					'avalonia',
					'miniaudio'
				]
			)}
			{@render item(
				'askkit',
				'A desktop AI chatbot built in Rust that lives in your tray and launches in an instant.',
				[
					'windows',
					'rust',
					'sqlite',
					'svelte',
					'desktop',
					'tauri',
					'tailwindcss',
					'tiptap',
					'sveltekit'
				]
			)}
			{@render item(
				'portfolio',
				'A white-paper, pixelated style portfolio website, built just for me.',
				['sveltekit', 'ssr', 'cloudflare-workers', 'zagjs']
			)}
			{@render item(
				'konekt',
				'A comprehensive and traditional web application for task management with list view, kanban view, and timeline view.',
				[
					'aspnetcore',
					'fast-endpoints',
					'signalr/websocket',
					'efcore',
					'wolverine',
					'vertical-slice-architecture',
					'sveltekit',
					'effect',
					'tailwindcss',
					'melt-ui',
					'cloudflare-workers'
				]
			)}
			<div
				class="col-span-full bg-surface-subtle px-4 py-1 text-xs font-semibold text-fg-muted uppercase"
			>
				Library
			</div>
			{@render item(
				'AltV.Community.MValueAdapters.Generators',
				'A roslyn source generator for MValue adapter implementation in alt:V.',
				['csharp', 'altv', 'roslyn-generator', 'coreclr-module']
			)}
			{@render item('attempt', 'A functional type for error handling in JavaScript/TypeScript.', [
				'typescript',
				'javascript',
				'functional',
				'functional-programming',
				'pipe',
				'error-handling',
				'try',
				'try-catch',
				'attempt',
				'result-pattern'
			])}
			{@render item('svelte utils', 'A collection of Svelte utilities.', ['svelte'])}
		</div>
	</div>
</section>
