import DB from '$lib/core/endpoints'
import type { IsCart, IsOrderObject } from '@interfaces'
import { Order } from '@models'

class CartClass implements IsCart {
	orders?: IsOrderObject[]

	constructor() {
		this.orders = []
	}
    get = async (): Promise<IsOrderObject[]> => {
        const response = await DB.get('carts')
        const data = response.carts
        for (const order of data) {
			this.orders = [...this.orders, new Order(order)];
		}
        return this.orders
    }
}

export const Cart: IsCart = new CartClass();
