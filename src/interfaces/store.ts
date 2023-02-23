import type { IsUserObject } from './auth';

export interface IsStore {
	url: string;
	getCategories(): Promise<string[]>;
	get(count: number): Promise<IsProduct[]>;
	createProduct(obj: IsProduct): Promise<IsProduct>;
	load(): Promise<void>;
}

export interface IsProduct extends IsProductObject {
	display(): void;
	edit(): void;
	update(data: HTMLFormElement): Promise<void>;
	addWishlist(): void;
}

export interface IsProductObject {
	id: number;
	title?: string;
	description?: string;
	price?: number;
	discountPercentage?: number;
	rating?: number;
	stock?: number;
	brand?: string;
	category?: string;
	thumbnail?: string;
	images?: string[];
	discountedPrice?: number;
	quantity?: number;
	total?: number;
}

export interface IsOrderObject {
	id: number;
	products?: IsProductObject[];
	total: number;
	discountedTotal: number;
	userId: number;
	totalProducts: number;
	totalQuantity: number;
}

export interface IsOrder extends IsOrderObject {
	get(): void;
}

export interface IsCartObject {
	orders?: IsOrderObject[];
}

export interface IsCart extends IsCartObject {
	get(): Promise<IsOrderObject[]>;
}

export interface IsCustomerObject {
	id: number;
	name: string;
	email: string;
}
export interface IsCustomer {
	get(): void;
}
// export interface IsCategory {
// 	id: number;
// 	name: string;
// }
