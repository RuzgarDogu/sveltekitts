import type { Handle } from '@sveltejs/kit';
import Auth from '$lib/core/auth';
import { redirect } from '@sveltejs/kit';

const unProtectedRoutes: string[] = ['/login', '/register'];

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.user = Auth.getFromCookies(event.cookies);
	if (
		(!unProtectedRoutes.includes(event.url.pathname) && !event.locals.user) ||
		(event.url.pathname === '/signout' && event.locals.user)
	) {
		event.cookies.delete('session');
		throw redirect(303, '/login');
	}
	return resolve(event);
};
