import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Work } from '$lib/works/types';
import { parseMarkdownToHtml } from '~/lib/works/markdown';
import { createHighlighter, type MarkdownHighlighter } from '~/lib/markdown/highlighter';

let highlighter: MarkdownHighlighter | undefined;

export const load: PageServerLoad = async (e) => {
    const response = await e.fetch(`/works.json?name=${e.params.work}`, { method: 'GET' });
    if (response.status === 404) {
        return error(404);
    }

    highlighter ??= await createHighlighter();
    const work = await response.json<Work>();
    const markdown = await e
        .fetch(
            `https://raw.githubusercontent.com/${work.author}/${work.repo}/refs/heads/main/README.md`,
            { method: 'GET' }
        )
        .then((a) => a.text());
    return {
        work: {
            ...work,
            htmlString: await parseMarkdownToHtml(markdown, { highlighter }),
        },
    };
};
