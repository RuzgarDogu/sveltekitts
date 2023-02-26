import type { PageLoad } from './$types';

export const load = (async ({params,parent}) => {
    const {id} = params;
    const data = await parent();
    return {
        order: data.cargo_orders.find((o) => o.id == id)
    };
}) satisfies PageLoad;