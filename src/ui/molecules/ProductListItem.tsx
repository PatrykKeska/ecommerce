import Link from "next/link";
import { ProductCoverDescription } from "../atoms/ProductCoverDescription";
import { ProductCoverImage } from "../atoms/ProductCoverImage";
import type { ProductItemType } from "../organisms/ProductList.type";

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
