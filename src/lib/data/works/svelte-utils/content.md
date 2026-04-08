# svelte utils

A collection of utility functions designed to simplify common patterns in Svelte applications.

## Installation

```bash
bun install @duydang2311/svutils
```

## API

### `createRef`

Creates a boxed state where the state is stored in a `.current` property. Useful for local mutations, optimistic UI updates, async data handling, and avoiding `$bindable`.

```svelte
<script lang="ts">
	import { createRef } from '@duydang2311/svutils';

	// Ref<number>
	const counterRef = createRef(0);

	// AsyncRef<SomeData>
	const fetchDataRef = createRef(async () => {
		const response = await fetch('/api/data');
		return response.json() as Promise<SomeData>;
	});
</script>

<div>
	Counter: {counterRef.current}
</div>
<button
	on:click={() => {
		++counterRef.current;
	}}>Increment</button
>

{#if fetchDataRef.loading}
	<p>Loading data...</p>
{:else}
	<p>Data: {fetchDataRef.current}</p>
{/if}
```

### `watch`

An explicit alternative to `$effect` with dependency tracking. Supports cleanup functions for side effects.

```svelte
<script>
	import { watch } from '@duydang2311/svutils';

	let value = $state(0);

	watch(() => value)(() => {
		console.log('Do something when value changed');
		return () => {
			console.log('Clean up');
		};
	});
</script>
```

### `createGSAPTransition`

Bridges GSAP animations with Svelte’s `transition:`, `in:`, and `out:` directives.

First, ensure you have GSAP installed:

```bash
bun install gsap
```

Then, use it in your Svelte components:

```svelte
<script>
	import { createGSAPTransition } from '@duydang2311/svutils';
	import gsap from 'gsap';

	// Create a Svelte transition compatible GSAP instance. Should only be created once throughout your application.
	const tsap = createGSAPTransition(gsap);

	let show = true;
</script>

<button on:click={() => (show = !show)}>Toggle</button>

{#if show}
	<div
		in:tsap={(node, gsap) => gsap.from(node, { autoAlpha: 0, y: -50, duration: 0.5 })}
		out:tsap={(node, gsap) => gsap.to(node, { autoAlpha: 0, y: 50, duration: 0.5 })}
	>
		Hello GSAP Transition!
	</div>
{/if}
```

## Contributing

Feel free to open an issue or submit a pull request if you have ideas for new utilities, improvements or fixes!

## License

MIT License. See [LICENSE](LICENSE) for details.
