import Link from "next/link";
import { ProductCoverDescription } from "../atoms/product/ProductCoverDescription";
import { ProductCoverImage } from "../atoms/product/ProductCoverImage";
import { type ProductListDetailsFragment } from "@/gql/graphql";

export const ProductListitem = ({ attributes }: ProductListDetailsFragment) => {
	return (
		<>
			<li className="bg-accent-1/10 shadow-lg">
				<Link
					href={{ pathname: `/product/${attributes?.slug}` }}
					className="group flex flex-col gap-3 rounded-lg  bg-white p-3 dark:bg-zinc-700"
				>
					{attributes?.productImageCover && (
						<ProductCoverImage
							url={attributes.productImageCover.data?.attributes?.url}
							alt={attributes.productName}
						/>
					)}
					{attributes?.productName && <ProductCoverDescription {...attributes} />}
				</Link>
			</li>
		</>
	);
};
