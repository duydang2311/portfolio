<script lang="ts">
	import Greetings from './Greetings.svelte';
</script>

<section>
	<div class="p-4">
		<Greetings />
	</div>
	<div class="w-full">
		<div class="px-4">
			<p class="font-display text-lg font-semibold text-fg-emph">1. About Me</p>
			<hr class="border-surface-border" />
		</div>
		<div class="mt-2 px-4">
			<div class="text-pretty">
				<p>
					I'm an early-career software engineer and a fan of learning through hands-on experience. I
					build functional apps for web and desktop, occasionally contributing to open-source works
					that are powering them.
				</p>
			</div>
		</div>
		<div class="mt-4 px-4">
			<p class="text-xs tracking-wide text-fg-muted uppercase">Tech Stacks</p>
			<div class="mt-2 grid grid-flow-row-dense grid-cols-3 gap-1 *:rounded-sm">
				<div class="col-span-2 border border-base-border p-4">
					<div>
						<h2 class="font-display font-medium text-fg-emph">Back-end</h2>
						<p class="text-sm text-fg-muted">
							I enjoy building back-ends using .NET where performance matters and Node.js for
							smaller, agile services.
						</p>
						<div class="mt-2 grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-4 *:flex-1">
							<div>
								<p class="text-sm text-fg-muted">Platforms</p>
								<div class="mt-1 flex flex-col gap-1">
									{#each ['.NET', 'Node.js', 'Cloudflare Workers'] as tech}
										<div class="rounded bg-base px-4 py-1 text-nowrap">{tech}</div>
									{/each}
								</div>
							</div>
							<div>
								<p class="text-sm text-fg-muted">Frameworks</p>
								<div class="mt-1 flex flex-col gap-1">
									{#each ['FastEndpoints', 'Minimal APIs', 'SvelteKit'] as tech}
										<div class="rounded bg-base px-4 py-1 text-nowrap">{tech}</div>
									{/each}
								</div>
							</div>
							<div>
								<p class="text-sm text-fg-muted">Data</p>
								<div class="mt-1 flex flex-col gap-1">
									{#each ['Entity Framework', 'Drizzle ORM'] as tech}
										<div class="rounded bg-base px-4 py-1 text-nowrap">{tech}</div>
									{/each}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row-span-2 border border-base-border p-4">
					<div>
						<h2 class="font-display font-medium text-fg-emph">Front-end</h2>
						<p class="text-sm text-fg-muted">
							I work across both Svelte and React ecosystems, but regardless of the framework, I
							have an interest in building my components on top of unstyled UI libraries.
						</p>
						<div class="mt-4 grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] gap-4">
							<div>
								<p class="text-sm text-fg-muted">Platforms</p>
								<div class="mt-1 flex flex-col gap-1">
									{#each ['Browser (JS/TS)'] as tech}
										<div class="rounded bg-base px-4 py-1 text-nowrap">{tech}</div>
									{/each}
								</div>
							</div>
							<div>
								<p class="text-sm text-fg-muted">Libraries/Frameworks</p>
								<div class="mt-1 flex flex-col gap-1">
									{#each ['Svelte', 'React', 'Tailwind CSS'] as tech}
										<div class="rounded bg-base px-4 py-1 text-nowrap">{tech}</div>
									{/each}
								</div>
							</div>
							<div>
								<p class="text-sm text-fg-muted">Tooling</p>
								<div class="mt-1 flex flex-col gap-1">
									{#each ['Vite', 'Turborepo', 'tsup'] as tech}
										<div class="rounded bg-base px-4 py-1 text-nowrap">{tech}</div>
									{/each}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="relative col-span-3 row-span-1 border border-base-border p-4">
					<div>
						<h2 class="font-display font-medium text-fg-emph">Desktop</h2>
						<p class="text-sm text-fg-muted">
							I lean toward Avalonia UI for stable, lightweight, modern desktop app, while keeping
							Rust for its immediate-mode and immature ecosystems.
						</p>
						<div class="mt-4 grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] gap-4">
							<div>
								<p class="text-sm text-fg-muted">Platforms</p>
								<div class="mt-1 flex flex-col gap-1">
									{#each ['.NET', 'Rust'] as tech}
										<div class="rounded bg-base px-4 py-1 text-nowrap">{tech}</div>
									{/each}
								</div>
							</div>
							<div>
								<p class="text-sm text-nowrap text-fg-muted">Architectures & Patterns</p>
								<div class="mt-1 flex flex-col gap-1">
									{#each ['MVVM', 'Vertical Slice', 'Reactive'] as tech}
										<div class="rounded bg-base px-4 py-1 text-nowrap">{tech}</div>
									{/each}
								</div>
							</div>
							<div>
								<p class="text-sm text-fg-muted">Frameworks</p>
								<div class="flex flex-col gap-1">
									{#each ['Avalonia UI', 'Tauri', 'egui', 'fltk-rs', 'Windows Forms', '.NET MAUI'] as tech}
										<div class="rounded bg-base px-4 py-1 text-nowrap">{tech}</div>
									{/each}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-span-3 border border-base-border p-4">
					<div>
						<h2 class="font-display font-medium text-fg-emph">Infrastructure</h2>
						<p class="text-sm text-fg-muted">
							These days, I like Docker for containerization, Cloudflare for its robust cloud
							services, and mise/just for development workflow.
						</p>
						<div class="mt-4 grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-4">
							<div>
								<p class="text-sm text-fg-muted">Data</p>
								<div class="mt-1 flex flex-col gap-1">
									{#each ['PostgreSQL', 'SQLite', 'MongoDB'] as tech}
										<div class="rounded bg-base px-4 py-1 text-nowrap">{tech}</div>
									{/each}
								</div>
							</div>
							<div>
								<p class="text-sm text-fg-muted">Messaging</p>
								<div class="mt-1 flex flex-col gap-1">
									{#each ['NATS.io', 'SignalR', 'WebSockets', 'gRPC'] as tech}
										<div class="rounded bg-base px-4 py-1 text-nowrap">{tech}</div>
									{/each}
								</div>
							</div>
							<div>
								<p class="text-sm text-fg-muted">DevOps</p>
								<div class="mt-1 flex flex-col gap-1">
									{#each ['Podman/Docker', 'Cloudflare', 'Supabase', 'Vercel'] as tech}
										<div class="rounded bg-base px-4 py-1 text-nowrap">{tech}</div>
									{/each}
								</div>
							</div>
							<div>
								<p class="text-sm text-fg-muted">Tooling</p>
								<div class="mt-1 flex flex-col gap-1">
									{#each ['mise', 'just'] as tech}
										<div class="rounded bg-base px-4 py-1 text-nowrap">{tech}</div>
									{/each}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-span-2 border border-base-border p-4">
					<div>
						<h2 class="font-display font-medium text-fg-emph">Specialized</h2>
						<p class="text-sm text-fg-muted">
							A collection of knowledge I gained from solving specific problems.
						</p>
						<div class="mt-4 grid grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] gap-1">
							{#each ['.NET Source Generators', '.NET Dynamic Expression', 'C/C# Interop (FFI)', 'C/Rust Interop (FFI)', 'Functional Programming'] as tech}
								<div class="rounded bg-base px-4 py-1 text-nowrap">{tech}</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
