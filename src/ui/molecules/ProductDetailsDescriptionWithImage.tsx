import NextImage from "next/image";
import { ProductDetailsDescription } from "../atoms/product/ProductDetailsDescription";
import { type ProductDetailsFragment } from "@/gql/graphql";

export const ProductDetailsDescriptionWithImage = ({
	productImageCover,
	productName,
	productDescription,
	productPrice,
	stock,
	slug,
}: ProductDetailsFragment) => {
	return (
		<>
			<section className="mx-auto mb-10 mt-10 flex flex-col gap-10 md:flex-row">
				<div>
					<div className="relative aspect-square h-96  w-full md:max-w-md">
						<NextImage
							src={
								productImageCover.data?.attributes?.url
									? productImageCover.data?.attributes?.url
									: `${process.env.NEXT_PUBLIC_PUBLIC_URL}/loader.avif`
							}
							alt="Picture of the author"
							fill
							sizes="100vw"
							quality={80}
							priority={true}
							className="inset-0 h-full w-full rounded-md object-cover object-center shadow-xl"
						/>
					</div>
				</div>
				<ProductDetailsDescription
					productName={productName}
					productDescription={productDescription}
					productPrice={productPrice}
					slug={slug}
					stock={stock}
				/>
			</section>
		</>
	);
};
