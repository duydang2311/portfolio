import type { PageServerLoad } from './$types';

const workImports = Object.entries(
	import.meta.glob('../../../lib/data/works/*/content.md') as Record<
		string,
		() => Promise<{
			html: string;
			meta?: Record<string, unknown>;
		}>
	>
).reduce(
	(acc, cur) => {
		acc[cur[0].split('/')[6]] = cur[1];
		return acc;
	},
	{} as Record<
		string,
		() => Promise<{
			html: string;
			meta?: Record<string, unknown>;
		}>
	>
);

export const load: PageServerLoad = async (e) => {
	const importWork = workImports[e.params.work];
	const work = importWork
		? await importWork()
		: { html: '<p class="text-fg-muted text-sm">Nothing to see here.</p>' };
	return {
		work
	};
};
