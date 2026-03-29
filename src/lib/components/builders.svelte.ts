import * as popover from '@zag-js/popover';
import * as slider from '@zag-js/slider';
import { normalizeProps, useMachine } from '@zag-js/svelte';

export function createPopover(props: Partial<popover.Props> | (() => Partial<popover.Props>)) {
	const service = useMachine(popover.machine, props);
	const api = $derived(popover.connect(service, normalizeProps));
	return {
		get api() {
			return api;
		}
	};
}

export function createSlider(props: Partial<slider.Props> | (() => Partial<slider.Props>)) {
	const service = useMachine(slider.machine, props);
	const api = $derived(slider.connect(service, normalizeProps));
	return {
		get api() {
			return api;
		}
	};
}
