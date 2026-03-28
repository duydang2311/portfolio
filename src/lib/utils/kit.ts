import { page } from '$app/state';

export function usePageData<T>() {
	return new Proxy(page.data, {
		get(target, p, _receiver) {
			return target[p as keyof typeof target];
		}
	}) as T;
}
