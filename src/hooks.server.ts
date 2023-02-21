import type { Handle } from '@sveltejs/kit';

function redirect(location: string, body?: string) {
    return new Response(body, {
        status: 303,
        headers: { location }
    });
}

const unProtectedRoutes: string[] = [
    '/',
    '/login',
    '/register'
]


export const handle: Handle = async ({ event, resolve }) => {
    const session = event.cookies.get('session')
    console.log("-----------------------------")
    console.log("session", session)
    console.log("event.url.pathname", event.url)
    console.log("..",!unProtectedRoutes.includes(event.url.pathname))
    if (!session && !unProtectedRoutes.includes(event.url.pathname)) {
        return redirect('/login', 'No authenticated user.');

    }
    console.log("-----------------------------")
        // const currentUser = await userRepository.fetch(session as string);

    // if (currentUser) {
    //     event.locals.user = {
    //         isAuthenticated: true,
    //         name: currentUser.name,
    //         email: currentUser.email,
    //         type: currentUser.user_type,
    //         active: currentUser.active,
    //         phone: currentUser.phone
    //     };
    // } else {
    //     if (!unProtectedRoutes.includes(event.url.pathname)) return redirect('/', 'Not a valid user');
    // }

    return resolve(event);
};