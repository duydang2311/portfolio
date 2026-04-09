import { prerender } from '$app/server';

interface GitHubContribResponse {
	total: { lastYear: number };
	contributions: { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 }[];
}

export const getGitHubContribution = prerender(async () => {
	const resp = await fetch('https://github-contributions-api.jogruber.de/v4/duydang2311?y=last', {
		method: 'GET'
	});
	return (await resp.json()) as GitHubContribResponse;
});
