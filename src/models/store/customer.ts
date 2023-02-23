import { APIURL } from '@config';
import DB from '$lib/core/endpoints';
import type { IsCustomer } from '@interfaces';

class CustomerClass  {
	customers: IsCustomer[];

	constructor() {
		this.customers = [];
	}
	load = async () => {
		const response = await DB.get('users');
		this.customers= response.users;
	}
	get = async (count = 10) => {
		if (!this.customers.length) {
			await this.load();
		}
		return this.customers;
	};
}

export const Customer: IsCustomer = new CustomerClass();
