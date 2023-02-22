import { Store } from '@models';
import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';

export const load = (async () => {
	const categories = await Store.getCategories();
	return {
		categories: categories.map((c) => ({
			value: c.id,
			name: c.name
		}))
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	createProduct: async ({ request }) => {
		const { title, category, price } = Object.fromEntries(
			await request.formData()
		) as unknown as {
			title: string;
			category: string;
			price: number;
		};
		try {
			await Store.createProduct({
				title: title,
				category: category,
				price: price
			});
		} catch (err) {
			console.error(err);
			// return fail(500, { message: "Could not create the product." })
		}
		return {
			status: 201
		};
	}
};
