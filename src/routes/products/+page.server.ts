import type { Actions, PageServerLoad } from './$types';
import { Store } from '@models'

export const load = (async () => {
	const products = await Store.get()
	const categories = await Store.getCategories()
    return {
        products: products,
        categories: categories,
		extra: 'Testing'
    };
}) satisfies PageServerLoad;

export const actions: Actions = {
    createProduct: async ({ request }) => {
		const { title, description } = Object.fromEntries(await request.formData()) as {
			title: string
			description: string
		}
		try {
			await Store.createProduct({
				title: title,
				description: description
			})
		} catch (err) {
			console.error(err)
			// return fail(500, { message: "Could not create the product." })
		}
		return {
			status: 201,
		}
	},
};