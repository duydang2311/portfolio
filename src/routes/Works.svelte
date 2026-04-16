<script lang="ts">
	import { goto, preloadData, pushState } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { GitHub } from '$lib/components/icons';
	import WorkPageDialog from './WorkPageDialog.svelte';
</script>

{#snippet item(
	title: string,
	desc: string,
	tags: string[],
	options?: { githubUrl?: string; stamp?: string }
)}
	<div
		class="relative flex flex-col justify-between gap-4 p-4 text-left hover:z-1 hover:bg-surface-subtle hover:outline-base-border has-[.part--github:hover]:bg-surface lg:p-6"
	>
		<a
			href={resolve('/w/[work]', { work: title.replace(/\s/g, '-') })}
			class="absolute inset-0"
			onclick={async (e) => {
				if (innerWidth < 640 || e.shiftKey || e.metaKey || e.ctrlKey) {
					return;
				}

				e.preventDefault();
				const href = resolve('/w/[work]', { work: title.replace(/\s/g, '-') });
				const result = await preloadData(href);
				if (result.type === 'loaded' && result.status === 200) {
					pushState(href, {
						shallowWorkPageProps: {
							title,
							data: result.data
						}
					});
				} else {
					await goto(href);
				}
			}}
			aria-label="Navigate to work"
		></a>
		<div>
			<p class="font-display text-lg font-medium wrap-anywhere text-fg-emph">{title}</p>
			<p class="mt-1 text-sm">
				{desc}
			</p>
		</div>
		<div class="flex flex-wrap gap-x-2 gap-y-1">
			{#each tags as tag (tag)}
				<div class="rounded-xs bg-base px-2 py-1 text-sm text-fg-subtle">{tag}</div>
			{/each}
		</div>
		{#if options?.stamp}
			<div
				class="absolute top-2 right-2 rounded-xs bg-primary p-1 text-xs font-medium tracking-wide text-primary-fg uppercase"
			>
				{options.stamp}
			</div>
		{/if}
		{#if options?.githubUrl}
			<a
				href={options.githubUrl}
				class="part--github absolute right-4 bottom-4 rounded-full transition duration-200 hover:scale-120 fill-fg hover:fill-primary-fg hover:ring hover:ring-primary-fg/40 hover:ring-offset-1 hover:ring-offset-surface"
				target="_blank"
			>
				<GitHub />
			</a>
		{/if}
	</div>
{/snippet}
<section class="@container py-6">
	<WorkPageDialog />
	<div class="w-full">
		<div class="px-4 lg:px-6">
			<h2 class="font-display text-xl font-semibold text-fg-emph">2. Works</h2>
		</div>
		<div class="isolate mt-4 grid gap-px *:outline *:outline-surface-border @[52rem]:grid-cols-2">
			<div
				class="col-span-full bg-surface-subtle px-4 py-2 text-xs font-medium text-fg-muted uppercase lg:px-6"
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
				],
				{ stamp: 'Active', githubUrl: 'https://github.com/duydang2311/sorairo' }
			)}
			{@render item(
				'portfolio',
				'A white-paper, pixelated style portfolio website, built just for me.',
				['sveltekit', 'ssr', 'cloudflare-workers', 'zagjs'],
				{ stamp: 'Active', githubUrl: 'https://github.com/duydang2311/portfolio' }
			)}
			{@render item(
				'fullest-web',
				'A task management platform designed for public-first collaboration.',
				[
					'docker',
					'csharp',
					'aspnetcore',
					'fastendpoints',
					'efcore',
					'postgresql',
					'clean-architecture',
					'vertical-slice-architecture',
					'sveltekit',
					'vite',
					'tailwindcss',
					'zagjs',
					'azure',
					'cloudflare-workers',
					'cloudflare-r2',
					'cloudflare-kv',
					'neon-db'
				],
				{ stamp: 'Early development', githubUrl: 'https://github.com/duydang2311/fullest-web' }
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
				],
				{ githubUrl: 'https://github.com/duydang2311/askkit' }
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
				],
				{ githubUrl: 'https://github.com/duydang2311/plan-backend' }
			)}
			<div
				class="col-span-full bg-surface-subtle px-4 py-2 text-xs font-medium text-fg-muted uppercase lg:px-6"
			>
				Library
			</div>
			{@render item(
				'AltV.Community.MValueAdapters.Generators',
				'A roslyn source generator for MValue adapter implementation in alt:V.',
				['csharp', 'altv', 'roslyn-generator', 'coreclr-module'],
				{ githubUrl: 'https://github.com/duydang2311/AltV.Community.MValueAdapters.Generators' }
			)}
			{@render item(
				'attempt',
				'A functional type for error handling in JavaScript/TypeScript.',
				[
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
				],
				{ githubUrl: 'https://github.com/duydang2311/attempt' }
			)}
			{@render item('svelte utils', 'A collection of Svelte utilities.', ['svelte'], {
				githubUrl: 'https://github.com/duydang2311/svutils'
			})}
		</div>
	</div>
</section>
