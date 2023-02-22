// See https://kit.svelte.dev/docs/types#app

import type { IsUserObject } from '@interfaces';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: IsUserObject | null;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
