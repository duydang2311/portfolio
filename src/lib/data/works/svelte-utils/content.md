# svelte utils

This library provides a set of helpful functions to streamline common tasks in your Svelte projects.

## What's Inside?

### `createRef`

`createRef` creates a reactive "boxed state" where the value is stored in its `.current` property. Use it for local mutations, optimistic UI updates, async state (comes with an extra loading flag), or to avoid `$bindable`.

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
<button on:click={() => { ++counterRef.current; }}>Increment</button>

{#if fetchDataRef.loading}
  <p>Loading data...</p>
{:else}
  <p>Data: {fetchDataRef.current}</p>
{/if}
```

### `watch`

Basically the `$effect` rune but with explicit dependency tracking.

```svelte
<script>
  import { watch } from '@duydang2311/svutils';

  let value = $state(0);

  watch(() => value)(() => {
    console.log('Do something when value changed');
    return () => {
      console.log('Clean up');
    }
  });
</script>
```

### `createGSAPTransition`

Integrate GSAP animations seamlessly into your Svelte transitions `transition:`, `in:`, and `out:`.

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

## Get Started

To start using these utilities, install the package:

```bash
bun install @duydang2311/svutils
```

Then, import the desired functions into your Svelte components.

## Contributing

If you have ideas for new utilities, improvements, or bug fixes, feel free to open an issue or submit a pull request.

Happy coding!