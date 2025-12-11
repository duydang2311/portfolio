import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Work } from '$lib/works/types';

export const prerender = false;
export const ssr = false;

export const load: PageServerLoad = async (e) => {
    const response = await e.fetch(`/works.json?name=${e.params.work}`, { method: 'GET' });
    if (response.status === 404) {
        return error(404);
    }

    const work = await response.json<Work>();
    return {
        work: {
            ...work,
            markdown: await e
                .fetch(
                    `https://raw.githubusercontent.com/${work.author}/${work.repo}/refs/heads/main/README.md`,
                    { method: 'GET' }
                )
                .then((a) => a.text()),
        },
    };
};
