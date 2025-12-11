import type { Work } from '$lib/works/types';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (e) => {
    return {
        works: await e.fetch('/works.json').then((a) => a.json() as Promise<Work[]>),
    };
};
