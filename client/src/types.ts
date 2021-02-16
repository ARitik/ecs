export interface User {
	name: string;
	email: string;
	createdAt: string;
	updatedAt: string;
	uid: string;
}

export interface Product {
	name: string;
	author: string;
	description?: string;
	category: string;
	image?: string;
	stock?: boolean;
	createdAt: string;
	updatedAt: string;
	pid: string;
}
