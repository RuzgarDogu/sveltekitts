import type { PageLoad } from './$types';
import  DB  from '$lib/core/endpoints';

export const load = (async () => {
    const prices = await DB.get('/prices');
    return {
        prices
    };
}) satisfies PageLoad;