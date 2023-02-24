import DB from '$lib/core/endpoints';
import type { IsCart, IsOrderObject } from '@interfaces';
import { Order } from '@models';

class CartClass implements IsCart {
	orders?: IsOrderObject[];

	constructor() {
		this.orders = [];
	}
	get = async (): Promise<IsOrderObject[]> => {
		if (this.orders?.length > 0) return this.orders;
		const response = await DB.get('carts');
		const data = response.carts;
		for (const order of data) {
			order.userDetails = await DB.get(`users/${order.userId}`);
			this.orders = [...this.orders, new Order(order)];
		}
		return this.orders;
	}
	getByUser = async (userId: string): Promise<IsOrderObject[]> => {
		const response = await DB.get(`carts/user/${userId}`);
		const data = response.carts;
		return data[0]
	}
}

export const Cart: IsCart = new CartClass();
