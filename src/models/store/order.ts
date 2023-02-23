import DB from '$lib/core/endpoints';
import type { IsProductObject } from '@interfaces';
import { Product } from '@models';

class Order implements IsOrder {
	id: number
	products?: IsProductObject[]
	total: number
    discountedTotal: number
    userId: number
    totalProducts: number
    totalQuantity: number

	constructor(obj: IsOrderObject) {
		this.id = obj.id
        this.products = this.initProducts(obj.products)
        this.total = obj.total
        this.discountedTotal = obj.discountedTotal
        this.userId = obj.userId
        this.totalProducts = obj.totalProducts
        this.totalQuantity = obj.totalQuantity
	}
    
    initProducts = (products: IsProductObject[]): IsProductObject[] => {
        let newProducts: IsProductObject[] = []
        for (const product of products) {
            newProducts = [...newProducts, new Product(product)]
        }
        return newProducts
    }

}

export default Order;
