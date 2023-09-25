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

export const getTotalProduct = async () => {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products");

	const data = (await res.json()) as ApiProduct[];

	const totalProducts = data.length / 5;

	return totalProducts;
};
