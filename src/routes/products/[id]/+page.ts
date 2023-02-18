import { Product } from '@models';
import type { PageLoad } from './$types';

export const load = (async ({params}) => {
    const product = new Product({id:Number(params.id)})
    await product.init()
    return {
        product: product
    };
}) satisfies PageLoad;