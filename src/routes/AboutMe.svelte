<script lang="ts"></script>

{#snippet primaryTech(text: string)}
	<div class="font-medium text-nowrap">{text}</div>
{/snippet}

{#snippet secondaryTech(text: string)}
	<div class="text-nowrap text-fg-subtle">{text}</div>
{/snippet}

<section class="py-6">
	<div class="w-full">
		<div class="px-4 lg:px-6">
			<p class="font-display text-xl font-semibold text-fg-emph">1. About Me</p>
			<p class="mt-1">
				I'm an early-career software engineer and a fan of learning through hands-on experience. I
				build functional apps for web and desktop, occasionally contributing to open-source works
				that are powering them.
			</p>
		</div>
		<div class="@container mt-6">
			<div class="grid grid-flow-row-dense gap-px *:outline *:outline-surface-border">
				<div class="relative px-4 py-6 lg:px-8 @[44rem]:col-span-2 @[88rem]:col-span-1">
					<span
						class="absolute top-0 left-4 -translate-y-1/2 bg-surface px-1 font-display lg:left-8"
					>
						Back-end
					</span>
					<p class="text-sm text-fg-muted">
						I enjoy building back-ends using .NET where performance matters and Node.js for smaller,
						agile services.
					</p>
					<div class="mt-4 flex flex-wrap gap-8 *:flex-1 *:basis-48">
						<div>
							<div class="text-xs tracking-wider text-fg-muted uppercase">Platforms</div>
							<div class="mt-2 space-y-2">
								{@render primaryTech('.NET')}
								{@render primaryTech('Node.js')}
								{@render primaryTech('Cloudflare Workers')}
							</div>
						</div>
						<div>
							<div class="text-xs tracking-wider text-fg-muted uppercase">Frameworks</div>
							<div class="mt-2 space-y-2">
								{@render primaryTech('FastEndpoints')}
								{@render secondaryTech('ASP.NET (Minimal APIs / MVC)')}
								{@render secondaryTech('Elysia.js')}
								{@render secondaryTech('Hono.js')}
							</div>
						</div>
						<div>
							<div class="text-xs tracking-wider text-fg-muted uppercase">Data</div>
							<div class="mt-2 space-y-2">
								{@render primaryTech('SQL (Raw / ORM)')}
								{@render primaryTech('Entity Framework Core')}
								{@render secondaryTech('MongoDB')}
								{@render secondaryTech('Drizzle ORM')}
							</div>
						</div>
					</div>
				</div>
				<div class="relative px-4 py-6 lg:px-8 @[44rem]:col-span-2 @[88rem]:col-span-1">
					<span
						class="absolute top-0 left-4 -translate-y-1/2 bg-surface px-1 font-display lg:left-8"
					>
						Front-end
					</span>
					<p class="text-sm text-fg-muted">
						I work across both Svelte and React ecosystems, but regardless of the framework, I have
						an interest in building my components on top of unstyled UI libraries. I love
						customization!
					</p>
					<div class="mt-4 flex flex-wrap gap-8 *:flex-1 *:basis-48">
						<div>
							<div class="text-xs tracking-wider text-fg-muted uppercase">Platforms</div>
							<div class="mt-2 space-y-2">
								{@render primaryTech('Browser (TS/JS)')}
							</div>
						</div>
						<div>
							<div class="text-xs tracking-wider text-fg-muted uppercase">Frameworks</div>
							<div class="mt-2 space-y-2">
								{@render primaryTech('Svelte')}
								{@render primaryTech('React')}
								{@render primaryTech('Tailwind CSS')}
							</div>
						</div>
						<div>
							<div class="text-xs tracking-wider text-fg-muted uppercase">Tooling</div>
							<div class="mt-2 space-y-2">
								{@render primaryTech('Bun/pnpm/npm')}
								{@render primaryTech('Vite')}
								{@render secondaryTech('Turborepo')}
								{@render secondaryTech('tsdown')}
								{@render secondaryTech('tsup')}
							</div>
						</div>
					</div>
				</div>
				<div class="relative px-4 py-6 lg:px-8 @[44rem]:col-span-2 @[68rem]:col-span-1">
					<span
						class="absolute top-0 left-4 -translate-y-1/2 bg-surface px-1 font-display lg:left-8"
					>
						Desktop
					</span>
					<p class="text-sm text-fg-muted">
						I use Avalonia UI for a stable, lightweight, cross-platform, modern desktop app, and Rust for exploring its immature but rapidly growing ecosystem.
					</p>
					<div class="mt-4 flex flex-wrap gap-8 *:flex-1 *:basis-48">
						<div>
							<div class="text-xs tracking-wider text-fg-muted uppercase">Platforms</div>
							<div class="mt-2 space-y-2">
								{@render primaryTech('.NET')}
								{@render secondaryTech('Rust')}
							</div>
						</div>
						<div>
							<div class="text-xs tracking-wider text-fg-muted uppercase">Frameworks</div>
							<div class="mt-2 space-y-2">
								{@render primaryTech('Avalonia UI')}
								{@render secondaryTech('Tauri')}
								{@render secondaryTech('egui')}
								{@render secondaryTech('fltk-rs')}
								{@render secondaryTech('Windows Forms')}
								{@render secondaryTech('.NET MAUI')}
							</div>
						</div>
						<div>
							<div class="text-xs tracking-wider text-fg-muted uppercase">
								Architectures & Patterns
							</div>
							<div class="mt-2 space-y-2">
								{@render primaryTech('MVVM')}
								{@render primaryTech('Reactive')}
								{@render primaryTech('Vertical Slice')}
							</div>
						</div>
					</div>
				</div>
				<div class="relative px-4 py-6 lg:px-8 @[44rem]:col-span-2 @[68rem]:col-span-1">
					<span
						class="absolute top-0 left-4 -translate-y-1/2 bg-surface px-1 font-display lg:left-8"
					>
						Infrastructure
					</span>
					<p class="text-sm text-fg-muted">
						These days, I like Docker for containerization, Cloudflare for its robust cloud
						services, and mise/just for development workflow.
					</p>
					<div class="mt-4 flex flex-wrap gap-8 *:flex-1 *:basis-48">
						<div>
							<div class="text-xs tracking-wider text-fg-muted uppercase">Data</div>
							<div class="mt-2 space-y-2">
								{@render primaryTech('PostgreSQL')}
								{@render secondaryTech('MariaDB')}
								{@render secondaryTech('MongoDB')}
								{@render secondaryTech('SQLite')}
							</div>
						</div>
						<div>
							<div class="text-xs tracking-wider text-fg-muted uppercase">Messaging</div>
							<div class="mt-2 space-y-2">
								{@render primaryTech('NATS.io')}
								{@render secondaryTech('SignalR')}
								{@render secondaryTech('WebSockets')}
							</div>
						</div>
						<div>
							<div class="text-xs tracking-wider text-fg-muted uppercase">DevOps</div>
							<div class="mt-2 space-y-2">
								{@render primaryTech('Podman')}
								{@render primaryTech('Docker')}
								{@render primaryTech('Cloudflare')}
								{@render primaryTech('Supabase')}
								{@render secondaryTech('Vercel')}
							</div>
						</div>

						<div>
							<div class="text-xs tracking-wider text-fg-muted uppercase">Tooling</div>
							<div class="mt-2 space-y-2">
								{@render primaryTech('mise')}
								{@render primaryTech('just')}
							</div>
						</div>
					</div>
				</div>
				<div class="relative px-4 py-6 lg:px-8 @[44rem]:col-span-2">
					<span
						class="absolute top-0 left-4 -translate-y-1/2 bg-surface px-1 font-display lg:left-8"
					>
						Extras
					</span>
					<p class="text-sm text-fg-muted">
						Some knowledge I gained from solving specific and less common problems.
					</p>
					<div class="mt-4 flex flex-wrap justify-center gap-8 *:flex-1 *:basis-48">
						<div>
							<div class="font-medium tracking-tight">.NET Source Generators</div>
							<div class="mt-1 text-sm text-fg-subtle">
								Generated source code to eliminate repetitive boilerplate at compile-time.
							</div>
						</div>
						<div>
							<div class="font-medium tracking-tight">.NET Dynamic Expression</div>
							<div class="mt-1 text-sm text-fg-subtle">
								Dynamically composed expressions for flexible EF Core queries at runtime.
							</div>
						</div>
						<div>
							<div class="font-medium tracking-tight">C/C# Interop (FFI)</div>
							<div class="mt-1 text-sm text-fg-subtle">
								Called native C functions from C# via declared bindings.
							</div>
						</div>
						<div>
							<div class="font-medium tracking-tight">C/Rust Interop (FFI)</div>
							<div class="mt-1 text-sm text-fg-subtle">
								Called native C functions from Rust via bindings generated by `bindgen`.
							</div>
						</div>
						<div>
							<div class="font-medium tracking-tight">Functional Programming</div>
							<div class="mt-1 text-sm text-fg-subtle">
								Applied FP principles like pipelines, immutability, and errors-as-values for
								explicit behavior and predictable code.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
