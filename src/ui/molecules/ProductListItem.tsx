import Link from "next/link";
import { ProductCoverDescription } from "../atoms/product/ProductCoverDescription";
import { ProductCoverImage } from "../atoms/product/ProductCoverImage";
import { type ApiProduct } from "@/api/getProducts";

export const ProductListitem = (product: ApiProduct) => {
	const { image, title, id } = product;
	return (
		<>
			<li className="bg-accent-1/10 shadow-lg">
				<Link
					href={{ pathname: `/products/${id}` }}
					className="group flex flex-col gap-3 rounded-lg  bg-white p-3 dark:bg-zinc-700"
				>
					<ProductCoverImage src={image} alt={title} />
					<ProductCoverDescription {...product} />
				</Link>
			</li>
		</>
	);
};
