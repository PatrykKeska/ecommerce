import NextImage from "next/image";
import { notFound } from "next/navigation";
import { ProductDetailsDescription } from "../atoms/product/ProductDetailsDescription";
import { type ProductDetailsFragment } from "@/gql/graphql";

export const ProductDetailsDescriptionWithImage = ({
	productImageCover,
	productName,
	productDescription,
	productPrice,
	stock,
}: ProductDetailsFragment) => {
	if (
		typeof productName !== "string" ||
		typeof productPrice !== "number" ||
		typeof stock !== "boolean" ||
		typeof productDescription !== "string"
	) {
		throw notFound();
	}
	if (!productImageCover || !productImageCover.data) {
		throw notFound();
	}
	return (
		<>
			<section className="mx-auto mb-10 mt-10 flex flex-col gap-10 md:flex-row">
				<div>
					<div className="r relative aspect-square w-full md:max-w-md">
						<NextImage
							src={
								productImageCover.data?.attributes?.url
									? productImageCover.data?.attributes?.url
									: `${process.env.NEXT_PUBLIC_PUBLIC_URL}/loader.avif`
							}
							alt="Picture of the author"
							width={700}
							height={400}
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
					stock={stock}
				/>
			</section>
		</>
	);
};
