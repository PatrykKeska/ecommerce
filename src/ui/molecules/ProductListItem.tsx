import Link from "next/link";
import { ProductCoverDescription } from "../atoms/product/ProductCoverDescription";
import { ProductCoverImage } from "../atoms/product/ProductCoverImage";
import type { ProductItemType } from "../organisms/ProductList/ProductList.type";

export const ProductListitem = (product: ProductItemType) => {
	const {
		image: { src, alt },
	} = product;
	return (
		<>
			<li className="bg-accent-1/10 shadow-lg">
				<Link
					href={`products/${product.id}`}
					className="group flex flex-col gap-3 rounded-lg  bg-white p-3 dark:bg-zinc-700"
				>
					<ProductCoverImage src={src} alt={alt} />
					<ProductCoverDescription {...product} />
				</Link>
			</li>
		</>
	);
};
