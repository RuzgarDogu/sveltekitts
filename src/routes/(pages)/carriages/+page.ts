import type { PageLoad } from './$types';
import  DB  from '$lib/core/endpoints';

export const load = (async ({}) => {
    const carriages = await DB.get('/carriage_types');
    return {
        carriages
    };
}) satisfies PageLoad;