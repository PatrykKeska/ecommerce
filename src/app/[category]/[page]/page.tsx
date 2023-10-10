import { ProductList } from "@/ui/organisms/ProductList/ProductList";
import { getCategoryProductsList } from "@/api/getCategoryProductsList";
import { CategoryPagination } from "@/ui/atoms/CategoryPagination";

type ProductsPageType = {
	params: {
		page: string;
		category: string;
	};
};

const DynamicPage = async ({ params: { page, category } }: ProductsPageType) => {
	const response = await getCategoryProductsList(category, Number(page));
	return (
		<main className="flex min-h-screen w-full flex-col items-center justify-start gap-5 p-5 dark:bg-slate-800 md:p-7 ">
			<ProductList {...response} />
			<CategoryPagination category={category} />
		</main>
	);
};
export default DynamicPage;
