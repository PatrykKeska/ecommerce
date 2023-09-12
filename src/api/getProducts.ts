export type ApiProduct = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
};

export const getProducts = async () => {
	const response = await fetch("https://naszsklep-api.vercel.app/api/products?take=20");
	const data = (await response.json()) as ApiProduct[];
	return data;
};
