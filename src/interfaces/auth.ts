export interface IsUserObject {
	id: number;
	firstName?: string;
	lastName?: string;
	email?: string;
	username?: string;
	wishlist?: number;
	avatar?: string;
}

export interface IsUser extends IsUserObject {
	getFromSession(sessionid: string): Promise<IsUser>;
	login(data: HTMLFormElement): Promise<IsUser>;
	logout(): void;
	register(data: HTMLFormElement): Promise<IsUser>;
	update(data: HTMLFormElement): Promise<IsUser>;
	delete(): Promise<IsUser>;
	get(): Promise<IsUser>;
}
