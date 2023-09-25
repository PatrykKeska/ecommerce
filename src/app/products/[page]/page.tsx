import { getProductsList } from "@/api/getProducts";

import { SearchInput } from "@/ui/atoms/Input/SearchInput";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";

type ProductsPageType = {
	params: {
		page: string;
	};
};

const ProductsPage = async ({ params: { page } }: ProductsPageType) => {
	console.log(page);
	const response = await getProductsList();

	return (
		<main className="flex min-h-screen w-full flex-col items-center justify-start gap-5 p-5 dark:bg-slate-800 md:p-7 ">
			<SearchInput />
			<ProductList {...response} />
		</main>
	);
};
export default ProductsPage;
