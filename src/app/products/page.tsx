import { SearchInput } from "@/ui/atoms/Input/SearchInput";
import { ProductList } from "@/ui/organisms/ProductList/ProductList";

const ProductsPage = () => {
	const exmapleSrc =
		"https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";
	return (
		<main className="flex min-h-screen w-full flex-col items-center justify-start gap-5 p-5 dark:bg-slate-800 md:p-7 ">
			<SearchInput />
			<ProductList
				products={[
					{
						category: "Electronics",
						productName: "Headphones",
						price: 1199,
						id: "1",
						rating: 4,
						image: {
							src: exmapleSrc,
							alt: "test alt",
						},
					},
					{
						category: "Electronics",
						productName: "Headphones",
						price: 1199,
						id: "2",
						rating: 4,
						image: {
							src: exmapleSrc,
							alt: "test alt",
						},
					},
					{
						category: "Electronics",
						productName: "Headphones",
						price: 1199,
						id: "3",
						rating: 4,
						image: {
							src: exmapleSrc,
							alt: "test alt",
						},
					},
					{
						category: "Electronics",
						productName: "Headphones",
						price: 1199,
						id: "4",
						rating: 4,
						image: {
							src: exmapleSrc,
							alt: "test alt",
						},
					},
				]}
			/>
		</main>
	);
};

export default ProductsPage;
