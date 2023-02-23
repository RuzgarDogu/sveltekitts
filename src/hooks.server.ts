import type { Handle } from '@sveltejs/kit';
import Auth from '$lib/core/auth';
import { redirect } from '@sveltejs/kit';

const unProtectedRoutes: string[] = ['/login', '/register'];

export const handle: Handle = async ({ event, resolve }) => {
	// app.d.ts'de App.Locals interface'ini tanımlayacağız
	// ve buradaki sorun çözülecek
	event.locals.user = (await Auth.getFromCookies(event.cookies)) || null;

	if (
		(!unProtectedRoutes.includes(event.url.pathname) && !event.locals.user) ||
		(event.url.pathname === '/signout' && event.locals.user)
	) {
		event.cookies.delete('session');
		event.cookies.delete('token');
		throw redirect(303, '/login');
	} else if (event.url.pathname === '/' && event.locals.user) {
		throw redirect(303, '/dashboard');
	}

	return resolve(event);
};
