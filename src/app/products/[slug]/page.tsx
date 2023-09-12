"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { ProductReviews } from "@/ui/organisms/ProductReviews/ProductReviews";
import { CheckIcon } from "@/assets/icons/CheckIcon";
import { OutofStockIcon } from "@/assets/icons/OutofStockIcon";
import { getProductDetails } from "@/api/getProductDetails";
import { type ApiProduct } from "@/api/getProducts";

type ProductDetailsPageType = {
	params: {
		slug: string;
	};
};

const ProductDetailsPage = ({ params: { slug } }: ProductDetailsPageType) => {
	const [readMore, setReadMore] = useState(false);
	const [product, setProduct] = useState<ApiProduct | null>(null);

	useEffect(() => {
		const fetchProduct = async () => {
			const res = await getProductDetails(slug);
			setProduct(res);
		};
		void fetchProduct();
	}, []);

	console.log(product);

	const isStock = false;
	if (!product) return null;
	const { description, image, price, title } = product;
	return (
		<>
			<section className="mx-auto mb-10 mt-10 flex flex-col gap-10 md:flex-row">
				<div>
					<div className="relative h-72 w-full max-w-md lg:h-96">
						<Image
							src={image}
							alt="Picture of the author"
							fill
							className="inset-0 h-full w-full rounded-md object-cover object-center shadow-xl"
						/>
					</div>
					<section className="flex h-32 max-w-md gap-3 overflow-x-scroll md:max-w-sm">
						<div className="relative mt-4 h-24 w-24 flex-none">
							<Image src={image} alt="Picture of the author" fill className="w-full object-cover" />
						</div>
						<div className="relative mt-4 h-24 w-24 flex-none">
							<Image src={image} alt="Picture of the author" fill className="object-cover" />
						</div>
						<div className="relative mt-4 h-24 w-24 flex-none">
							<Image src={image} alt="Picture of the author" fill className="object-cover" />
						</div>
						<div className="relative mt-4 h-24 w-24 flex-none">
							<Image src={image} alt="Picture of the author" fill className="object-cover" />
						</div>
						<div className="relative mt-4 h-24 w-24 flex-none">
							<Image src={image} alt="Picture of the author" fill className="object-cover" />
						</div>
						<div className="relative mt-4 h-24 w-24 flex-none">
							<Image src={image} alt="Picture of the author" fill className="object-cover" />
						</div>
					</section>
				</div>
				<article className="flex w-full max-w-md flex-col gap-2 md:w-1/2">
					<h1 className="text-left text-2xl font-bold">{title}</h1>
					<p className="text-md font-bold">
						Price: <span className="font-normal text-green-500">{price / 100} $</span>
					</p>
					<p>
						<strong className="flex items-center gap-2">
							stock: {isStock ? <CheckIcon /> : <OutofStockIcon />}
						</strong>
					</p>
					<p className={clsx(`${!readMore && "truncate"} max-h-80  overflow-y-scroll pr-10`)}>
						<strong>Description: </strong>
						{description}
					</p>
					<span onClick={() => setReadMore(!readMore)} role="button" className="italic underline">
						{readMore ? "collapse" : "read more"}
					</span>
					{isStock ? (
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
