import { type ApiProduct } from "@/api/getProducts";
import { ProductListitem } from "@/ui/molecules/ProductListItem";

export const ProductList = ({ products }: { products: ApiProduct[] }) => {
	return (
		<>
			<ul
				data-testid="products-list"
				className="grid  grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
			>
				{products.map((product) => (
					<ProductListitem key={product.id} {...product} />
				))}
			</ul>
		</>
	);
};
