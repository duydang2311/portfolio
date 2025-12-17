import type { Work } from '$lib/works/types.js';

const works: Work[] = [
    {
        type: 'markdown',
        name: 'portfolio',
    },
    {
        type: 'markdown',
        name: 'fullest-web',
    },
    {
        type: 'markdown',
        name: 'askkit',
    },
    {
        type: 'markdown',
        name: 'konekt',
    },
    {
        type: 'git',
        author: 'duydang2311',
        repo: 'AltV.Community.MValueAdapters.Generators',
        name: 'mvalue-codegen',
    },
    {
        type: 'git',
        author: 'duydang2311',
        repo: 'attempt',
        name: 'attempt',
    },
    {
        type: 'git',
        author: 'duydang2311',
        repo: 'svutils',
        name: 'svelte utils',
    },
];

export const GET = (e) => {
    const name = e.url.searchParams.get('name');
    if (name) {
        const work = works.find((a) => a.name === name);
        if (!work) {
            return new Response(null, { status: 404 });
        }
        return Response.json(work, { status: 200 });
    }
    return Response.json(works, { status: 200 });
};
