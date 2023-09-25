import { type ProductGetListQuery } from "@/gql/graphql";
import { ProductListitem } from "@/ui/molecules/ProductListItem";

export const ProductList = ({ products }: ProductGetListQuery) => {
	return (
		<>
			<ul
				data-testid="products-list"
				className="grid  grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
			>
				{products?.data.map((product) => {
					return <ProductListitem key={product.attributes?.slug} {...product} />;
				})}
			</ul>
		</>
	);
};
