import type { PageServerLoad } from './$types';
import { Store } from '@models'

export const load = (async () => {
	const products = await Store.get(12)
    console.log("----------------",products)
	const categories = await Store.getCategories()
    return {
        products: products,
        categories: categories
    };
}) satisfies PageServerLoad;