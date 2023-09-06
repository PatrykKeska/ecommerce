import { type ProductItemType } from "./ProductList.type";
import { ProductListitem } from "@/ui/molecules/ProductListItem";

export const ProductList = ({ products }: { products: ProductItemType[] }) => {
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
