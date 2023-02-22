import DB from '$lib/core/endpoints';
import type { IsUser, IsUserObject } from '@interfaces';

class User implements IsUser {
	id: number;
	firstName?: string;
	lastName?: string;
	email?: string;
	username?: string;
	wishlist?: number;
	avatar?: string;

	constructor(obj: IsUserObject) {
		this.id = obj.id;
		this.firstName = obj.firstName;
		this.lastName = obj.lastName;
		this.email = obj.email;
		this.username = obj.username;
		this.wishlist = obj.wishlist;
		this.avatar = obj.avatar;
	}

	get(sessionid: string): Promise<IsUser> {
		return { id: 1 };
		// return DB.get(`/auth/session/${sessionid}`)
		return { id: 1 } as IsUser;
	}
}

export default User;
