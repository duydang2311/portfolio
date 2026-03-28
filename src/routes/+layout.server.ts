import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (e) => {
	return {
		theme: e.locals.theme
	};
};
