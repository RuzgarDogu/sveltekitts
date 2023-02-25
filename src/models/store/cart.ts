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
		const carts = await DB.get('carts');
		const users = await DB.get('users');

		for (const order of carts) {
			order.userDetails = users.find((user) => user.id === order.userId);
			this.orders = [...this.orders, new Order(order)];
		}
		return this.orders;
	};
	getById = async (id: string): Promise<IsOrderObject> => {
		const response = await DB.get(`carts/${id}`);
		const data = response;
		return data;
	};
	// getByUser = async (userId: string): Promise<IsOrderObject[]> => {
	// 	const response = await DB.get(`carts/user/${userId}`);
	// 	const data = response.carts;
	// 	return data[0]
	// }
}

export const Cart: IsCart = new CartClass();
