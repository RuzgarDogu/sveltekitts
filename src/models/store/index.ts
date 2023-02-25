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
	load = async (_limit = 11, _page = 1) => {
		const response = await DB.get('products', { _limit, _page });
		const products = response;
		for (const product of products) {
			this.products = [...this.products, new Product(product)];
		}
		console.log('////////////////////////////////////////////////');
		console.log(this.products);
		console.log('////////////////////////////////////////////////');
	};
	get = async (count = 10) => {
		const len = this.products.length;
		if (len < count) {
			await this.load(count - len, len - 1);
		}
		return this.products;
	};
	getCategories = async (): Promise<IsCategory[]> => {
		return DB.get('categories');
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
