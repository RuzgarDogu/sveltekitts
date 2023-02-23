import type { PageLoad } from './$types';
import { Cart } from '@models';

export const load = (async () => {
    const orders = await Cart.get()
    // console.log(orders)
    return {
        orders: orders
    };
}) satisfies PageLoad;