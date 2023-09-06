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
			<li>
				<Link href="#" className="group flex flex-col gap-3 rounded-lg bg-white p-3">
					<ProductCoverImage src={src} alt={alt} />
					<ProductCoverDescription {...product} />
				</Link>
			</li>
		</>
	);
};
