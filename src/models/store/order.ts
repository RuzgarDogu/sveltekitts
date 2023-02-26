import DB from '$lib/core/endpoints';
import type { IsProductObject, IsUserObject, IsOrder, IsOrderObject } from '@interfaces';
import { Product } from '@models';

class Order implements IsOrder {
	id: number;
	products?: IsProductObject[];
	total: number;
	discountedTotal: number;
	userId: number;
	userDetails?: IsUserObject;
	totalProducts: number;
	totalQuantity: number;

	constructor(obj: IsOrderObject) {
		this.id = obj.id;
		this.products = this.initProducts(obj.products);
		this.total = obj.total;
		this.discountedTotal = obj.discountedTotal;
		this.userId = obj.userId;
		this.userDetails = obj.userDetails;
		this.totalProducts = obj.totalProducts;
		this.totalQuantity = obj.totalQuantity;
	}

	initProducts = (products: IsProductObject[]): IsProductObject[] => {
		if (this.products?.length > 0) return this.products;
		let newProducts: IsProductObject[] = [];
		for (const product of products) {
			newProducts = [...newProducts, new Product(product)];
		}
		return newProducts;
	};
	sendToCargo = async ():boolean => {

		const carriers = [
			"Locton İç & Dış Ticaret"
		]
		
		const countries = ["Türkiye","Almanya","Fransa","İtalya","Rusya","İran","İspanya","İngiltere","A.B.D."]
		
		const types = ["Fedex-TNT-Express","DHL-Express","UPS-Express","MNG-Kargo","Yurtiçi-Kargo","Aras-Kargo","PTT-Kargo","Sürat-Kargo"]
		const sender = "Mia Tarım Ürünleri İthalat İhracat AŞ"
		


		let cargoes = await DB.get('cargoes');
		let body = {
			order_id: this.id,
			carrier: carriers[Math.floor(Math.random() * carriers.length)],
            type: types[Math.floor(Math.random() * types.length)],
            sender,
            awb: Math.floor(Math.random() * 100000000).toString(),
            awb_date: new Date().toISOString().split("T")[0].split("-").reverse().join("."),
            weight: Math.floor(Math.random() * 1000),
            volume_weight: 0,
            country: countries[Math.floor(Math.random() * countries.length)]
		}

		// check if this.id is in the cargoes array and if not, send post request to DB
		let exists = cargoes.some((cargo: any) => cargo.order_id === this.id)

		if(!exists) {
			DB.post('cargoes', body)
			return true
		}

		// push the order to the array if it's not already in there
		// if (!cargoOrdersArray.includes(this.id)) {
		// 	cargoOrdersArray = [...cargoOrdersArray, this.id]
		// 	localStorage.setItem('cargo_orders', JSON.stringify(cargoOrdersArray));
		// 	return true
		// }
		return false
		// return cargoOrdersArray;
	}
}

export default Order;
