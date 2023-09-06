export type ProductItemType = {
	image: { src: string; alt: string };
	id: string;
	price: number;
	rating?: number;
	productName: string;
	category: string;
};
