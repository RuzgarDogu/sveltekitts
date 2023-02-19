import { Product, Store } from '@models';
import type { IsProduct } from 'src/interfaces/general';
import type { Actions, PageServerLoad } from './$types';
let product:IsProduct

export const load = (async ({params}) => {
    product = new Product({id:Number(params.id)})
    const categories = await Store.getCategories()
    await product.init()
    // Server side'ta Product nesnesi serialize edilmediği için get çağırıyoruz.
    return {
        product: product.get(),
        categories: categories.map((c) => ({
			value: c.id,
			name: c.name
		}))
    };
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async ({ request }) => {
		const { title, category, price, description } = Object.fromEntries(await request.formData()) as unknown as {
			title: string
			category: number
			price: number
            description: string
		}
		product.title = title
		product.category = category
		product.price = price
		product.description = description

		try {
			product = await product.update()
			// Bunu sayfa tarafına göndermemiz lazım
			console.log("result",product)
		} catch (err) {
			console.error(err)
			// return fail(500, { message: "Could not create the product." })
		}
		return {
			status: 201,
		}
	},
};