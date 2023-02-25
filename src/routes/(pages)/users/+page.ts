import type { PageLoad } from './$types';
import { Customer } from '@models';

export const load = (async () => {
	return {
		customers: await Customer.get()
	};
}) satisfies PageLoad;
