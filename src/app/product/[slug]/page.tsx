import Image from "next/image";
import clsx from "clsx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { loadEnvConfig } from "@next/env";
import { ProductReviews } from "@/ui/organisms/ProductReviews/ProductReviews";
import { CheckIcon } from "@/assets/icons/CheckIcon";
import { OutofStockIcon } from "@/assets/icons/OutofStockIcon";
import { getProductDetails } from "@/api/getProductDetails";
type ProductDetailsPageType = {
	params: {
		slug: string;
	};
};

const ProductDetailsPage = async ({ params: { slug } }: ProductDetailsPageType) => {
	const response = await getProductDetails(slug);
	const productDetails = response.products?.data[0]?.attributes;
	loadEnvConfig(process.cwd());
	if (!productDetails) {
		throw notFound();
	}

	const { productName, productDescription, productImageCover, productPrice, stock } =
		productDetails;

	return (
		<>
			<section className="mx-auto mb-10 mt-10 flex flex-col gap-10 md:flex-row">
				<div>
					<div className="relative w-full max-w-md">
						<Image
							src={
								productImageCover.data?.attributes?.url
									? productImageCover.data?.attributes?.url
									: `${process.env.NEXT_PUBLIC_PUBLIC_URL}/loader.avif`
							}
							alt="Picture of the author"
							width={700}
							height={400}
							quality={100}
							className="inset-0 h-full w-full rounded-md object-cover object-center shadow-xl"
						/>
					</div>
				</div>
				<article className="flex w-full max-w-md flex-col gap-2 md:w-1/2">
					<h1 className="text-left text-2xl font-bold">{productName}</h1>
					<p className="text-md font-bold">
						Price: <span className="font-normal text-green-500">{productPrice / 100} $</span>
					</p>
					<p>
						<strong className="flex items-center gap-2">
							stock: {stock ? <CheckIcon /> : <OutofStockIcon />}
						</strong>
					</p>
					<article className={clsx(`prose max-h-80 overflow-y-scroll pr-10`)}>
						<strong>Description: </strong>
						<MDXRemote source={productDescription} />
					</article>
					{stock ? (
						<button className="mt-3 h-14 w-80  rounded-xl bg-gradient-to-tr from-violet-500 to-sky-500 px-4 py-3 font-bold text-white transition-all duration-200 ease-in-out  hover:scale-95 dark:from-violet-700 dark:to-sky-700">
							Add to Cart
						</button>
					) : (
						<button
							disabled
							className="mt-3 h-14 w-80 rounded-xl bg-gradient-to-tr from-violet-500 to-sky-500 px-4 py-3 font-bold text-white opacity-50  transition-all  duration-200 ease-in-out  dark:from-violet-700 dark:to-sky-700"
						>
							Out of stock
						</button>
					)}
				</article>
			</section>
			<ProductReviews />
		</>
	);
};

export default ProductDetailsPage;
