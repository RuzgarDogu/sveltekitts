export interface IsStore {
	url: string;
	getCategories(): Promise<IsCategory[]>;
	get(): Promise<IsProduct[]>;
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
	rating?: number;
	isActive?: number;
	category?: number;
	image?: string;
	createdAt?: string;
}

export interface IsCategory {
	id: number;
	name: string;
}
