import type { PageServerLoad } from './$types';

const workContentImports = Object.entries(
	import.meta.glob('../../../lib/data/works/*/content.md', {
		import: 'default'
	}) as Record<string, () => Promise<string>>
).reduce(
	(acc, cur) => {
		acc[cur[0].split('/')[6]] = cur[1];
		return acc;
	},
	{} as Record<string, () => Promise<string>>
);

export const load: PageServerLoad = async (e) => {
	const importWorkContent = workContentImports[e.params.work];
	const contentHtml = importWorkContent ? await importWorkContent() : '<p class="text-fg-muted text-sm">Nothing to see here.</p>';
	return {
		contentHtml
	};
};
