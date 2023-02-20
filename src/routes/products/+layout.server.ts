import type { LayoutServerLoad } from './$types';
import { Store } from '@models'

export const load = (async () => {
    const products = await Store.get()
	const categories = await Store.getCategories()
    return {
        products: products,
        categories: categories
    }
}) satisfies LayoutServerLoad;