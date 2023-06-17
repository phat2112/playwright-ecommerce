export interface Product {
	id: number;
	name: string;
	price: string;
	image: string;
}

export type FormProduct = Omit<Product, 'id'>;
