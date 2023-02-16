import { Product } from '@models';
import type { PageLoad } from './$types';

export const load = (async ({params}) => {
    const id = Number(params.id)
    const product = new Product({id:id})
    const asd = await product.get()
    console.log("product",product)
    console.log("product get",asd)
    return {
        product: product.get()
    };
}) satisfies PageLoad;