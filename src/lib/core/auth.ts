import type { IsUserObject } from '@interfaces';
import { User } from '@models';
import type { Cookies } from '@sveltejs/kit';
import DB from './endpoints';
class Authentication {
	getFromCookies = async (cookies: Cookies): Promise<IsUserObject | null> => {
		const id = cookies.get('id');
		if (id) {
			return await Authentication.getByID(id);
		}
		return null;
	};

	static getByID = async (id: string) => {
		const user = await DB.get(`/users/${id}`);
		console.log(user);
		return user || null;
	};

	static check = async (username: string, password: string) => {
		const user = await DB.post(`auth/login`, { username, password });
		console.log('--------------');
		console.log(user);
		console.log('--------------');
		if (user) {
			if (user.password === password) {
				return new User(user);
			}
			// Henüz password kontrolü yok
			// o yüzden şimdilik true döndürüyoruz
			return new User(user);
		}
		return false;
	};

	login = async (email: string, password: string) => {
		return await Authentication.check(email, password as string);
	};
}
const Auth = new Authentication();
export default Auth;
