import { getProducts } from "@/api/getProducts";
import { SearchInput } from "@/ui/atoms/Input/SearchInput";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";

const ProductsPage = async () => {
	const products = await getProducts();

	return (
		<main className="flex min-h-screen w-full flex-col items-center justify-start gap-5 p-5 dark:bg-slate-800 md:p-7 ">
			<SearchInput />
			<ProductList products={[...products]} />
		</main>
	);
};

export default ProductsPage;
