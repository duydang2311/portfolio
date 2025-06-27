import { getUserPreferredColorScheme } from '$lib/common/utils';
import type { LayoutLoad } from './$types';

export const ssr = false;
export const prerender = true;

export const load: LayoutLoad = async () => {
    const colorScheme = getUserPreferredColorScheme();
    return {
        colorScheme: colorScheme,
    };
};
