import type { Ref } from '@duydang2311/svutils';
import { getContext, setContext } from 'svelte';

interface Runtime {
    colorScheme: Ref<'light' | 'dark' | 'system'>;
}

const symbol = Symbol('runtime');

export const setRuntime = (runtime: Runtime) => {
    return setContext(symbol, runtime);
};

export const useRuntime = () => {
    return getContext<Runtime>(symbol);
};
