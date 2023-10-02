import { getProductsList } from "@/api/getProducts";
import { SearchInput } from "@/ui/atoms/Input/SearchInput";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";
import { Pagination } from "@/ui/atoms/Pagination";

type ProductsPageType = {
	params: {
		page: string;
	};
};

const ProductsPage = async ({ params: { page } }: ProductsPageType) => {
	const response = await getProductsList(Number(page));

	return (
		<main className="flex min-h-screen w-full flex-col items-center justify-start gap-5 p-5 dark:bg-slate-800 md:p-7 ">
			<SearchInput />
			<ProductList {...response} />
			<Pagination />
		</main>
	);
};
export default ProductsPage;
