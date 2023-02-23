import { APIURL } from '@config';
import type { IsStore } from '@interfaces';
import type { IsProductObject, IsCategory } from '@interfaces';
import { Product } from '@models';
import DB from '$lib/core/endpoints';

class StoreClass implements IsStore {
	products: Product[];

	constructor() {
		this.products = [];
	}
	load = async (limit = 11, skip = 0) => {
		const response = await DB.get('products', { limit, skip });
		const products = response.products;
		for (const product of products) {
			this.products = [...this.products, new Product(product)];
		}
	};
	get = async (count = 10) => {
		const len = this.products.length;
		if (len < count) {
			await this.load(count - len, len - 1);
		}
		return this.products;
	};
	getCategories = async (): Promise<IsCategory[]> => {
		return DB.get('products/categories');
	};
	createProduct(obj: IsProductObject): Promise<IsProduct> {
		return new Promise((resolve, reject) => {
			DB.post('/products/add', obj)
				.then((response) => {
					obj.id = response.id;
					const newProduct = new Product(obj);
					this.products = [...this.products, newProduct];
					resolve(newProduct);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
}

export const Store: IsStore = new StoreClass();
