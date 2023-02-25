import type { PageLoad } from './$types';
import { Cart } from '@models';
import markets from '$lib/assets/markets.json';

export const load = (async () => {
	const orders = await Cart.get();
	console.log('orders', orders);
	orders.map((order) => {
		const rnd = Math.floor(Math.random() * markets.length);
		order.market = markets[rnd];
		order.totalProducts = rnd + 1;
		order.status = 'none';
	});

	return {
		orders: orders
	};
}) satisfies PageLoad;
