import type { Work } from '$lib/works/types';
import { error } from '@sveltejs/kit';
import { parseMarkdownToHtml } from '~/lib/works/markdown';
import type { PageServerLoad } from './$types';

const workPosts = Object.fromEntries(
    Object.entries(
        import.meta.glob('~/data/works/*/en.md', { query: '?raw', import: 'default' })
    ).map(([k, v]) => [k.split('/')[4], v])
);

const workImages = Object.entries(
    import.meta.glob('~/data/works/*/images/*.png', {
        query: '?url',
        eager: true,
        import: 'default',
    }) as Record<string, string>
).reduce<Record<string, string[]>>((acc, cur) => {
    const name = cur[0].split('/')[4];
    if (!acc[name]) {
        acc[name] = [cur[1]];
    } else {
        acc[name].push(cur[1]);
    }
    return acc;
}, {});

const imageMeta = Object.fromEntries(
    Object.entries(import.meta.glob('~/data/works/*/images.meta.json', { import: 'default' })).map(
        ([k, v]) => [k.split('/')[4], v]
    )
);

export const load: PageServerLoad = async (e) => {
    const response = await e.fetch(`/works.json?name=${e.params.work}`, { method: 'GET' });
    if (response.status === 404) {
        return error(404);
    }

    const work = await response.json<Work>();
    let markdown = '';
    if (work.type === 'git') {
        markdown = await e
            .fetch(
                `https://raw.githubusercontent.com/${work.author}/${work.repo}/refs/heads/main/README.md`,
                { method: 'GET' }
            )
            .then((a) => a.text());
        return {
            work: {
                ...work,
                htmlString: await parseMarkdownToHtml(markdown),
            },
        };
    }

    let images: { src: string; title?: string; alt?: string }[] | undefined;
    const importMarkdown = workPosts[work.name];
    if (importMarkdown) {
        markdown = (await importMarkdown()) as string;
    }

    const srcs = workImages[work.name];
    if (srcs) {
        const metas = (await imageMeta[work.name]?.()) as
            | Record<string, { title: string; alt: string }>
            | undefined;
        images = srcs.map((a) => {
            const name = a.split('/').at(-1)!.split('.')[0];
            const meta = metas?.[name];
            return {
                title: meta?.title,
                src: a,
                alt: meta?.alt,
            };
        });
    }
    return {
        work: {
            ...work,
            htmlString: await parseMarkdownToHtml(markdown),
            images,
        },
    };
};
