import { Product, Store } from '@models';
import type { IsProduct } from 'src/interfaces/general';
import type { PageLoad } from './$types';
let product:IsProduct

export const load = (async ({params}) => {
    product = new Product({id:Number(params.id)})
    await product.init()
    const categories = await Store.getCategories()
    await product.init()
    return {
        product: product,
        categories: categories.map((c) => ({
			value: c.id,
			name: c.name
		}))
    };
}) satisfies PageLoad;

