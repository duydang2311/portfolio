import { createContext } from "svelte";

export interface Runtime {
	hue: number;
}

export const [useRuntime, setRuntime] = createContext<Runtime>();
