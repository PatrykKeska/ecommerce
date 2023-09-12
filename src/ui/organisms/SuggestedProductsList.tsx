import { ProductList } from "./ProductList/ProductList";
import { getProducts } from "@/api/getProducts";

export const SuggestedProductsList = async () => {
	const products = await getProducts();
	return <ProductList products={products} />;
};
