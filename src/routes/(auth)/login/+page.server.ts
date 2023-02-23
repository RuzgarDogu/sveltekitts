import type { PageServerLoad, Actions } from './$types';
import Auth from '$lib/core/auth';
import { redirect } from '@sveltejs/kit';
import { dev } from '$app/environment';

export const load = (async ({ cookies }) => {
	return { result: true };
	return await User.getFromSession(cookies.get('sessionid'));
	return { user };
}) satisfies PageServerLoad;

export const actions: Actions = {
	login: async ({ request, cookies }) => {
		const { username, password } = Object.fromEntries(await request.formData()) as unknown as {
			username: string;
			password: string;
		};
		const user = await Auth.login(username, password);
		console.log('----------------user', user);
		if (!user) {
			await cookies.delete('session');
			await cookies.delete('token');
			return {
				status: 401,
				body: {
					success: false,
					message: 'Invalid credentials',
					data: {
						username,
						password
					}
				}
			};
		} else {
			cookies.set('id', user.id, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: !dev,
				maxAge: 60 * 60 * 24 * 30
			});
			cookies.set('session', user.token, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: !dev,
				maxAge: 60 * 60 * 24 * 30
			});

			throw redirect(303, '/dashboard');

			// return {
			//     status: 201,
			//     body: {
			//         success: true,
			//         message: 'Login successful',
			//         data: {
			//             user
			//             }
			//     }
			// }
		}
	}
};
