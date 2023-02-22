import DB from '$lib/core/endpoints';
import type { HtmlElement, IsProduct, IsProductObject } from '@interfaces';
class Product implements IsProduct {
	id: number;
	title?: string;
	description?: string;
	price?: number;
	rating?: number;
	isActive?: number;
	category?: number;
	image?: string;
	createdAt?: string;

	constructor(obj: IsProductObject) {
		this.id = obj.id;
		this.title = obj.title;
		this.description = obj.description;
		this.price = obj.price;
		this.rating = obj.rating;
		this.isActive = obj.isActive;
		this.category = obj.category;
		this.image = obj.image;
		this.createdAt = obj.createdAt;
	}
	display = () => {
		window.location = '/products/' + this.id;
	};
	edit = () => {
		window.location = '/products/edit/' + this.id;
	};
	update = async (form: HtmlFormElement): Promise<void> => {
		if (!form) return;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());
		const response = await DB.put('/products/' + this.id, data);
		if (!response.error) {
			for (const key in data) {
				if (key in this) {
					this[key] = data[key];
				}
			}
			alert('Product updated successfully');
		} else {
			alert('Product could not be updated');
		}
	};
	addWishlist(e: HtmlElement): void {
		e.currentTarget.classList.toggle('wishlistAdded');
		let wishlist: number[] =
			localStorage
				.getItem('wishlist')
				?.split(',')
				.map((w) => Number(w)) || [];
		wishlist = [...wishlist, this.id];
		localStorage.setItem('wishlist', wishlist.join(','));
	}
}

export default Product;
