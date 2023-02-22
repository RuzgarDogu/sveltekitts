import type { IsProduct } from '@interfaces';
import type { PageLoad } from './$types';

export const load = (async ({params,parent}) => {
    const data = await parent()
    const product = data.products.find((p:IsProduct) => p.id === Number(params.id))
    return {product}
}) satisfies PageLoad