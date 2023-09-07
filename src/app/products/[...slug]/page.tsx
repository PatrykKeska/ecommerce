"use client";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import { ProductReviews } from "@/ui/organisms/ProductReviews/ProductReviews";
import { CheckIcon } from "@/assets/icons/CheckIcon";

type ProductDetailsPageType = {
	params: {
		slug: string;
	};
};

const ProductDetailsPage = ({ params: { slug } }: ProductDetailsPageType) => {
	const [readMore, setReadMore] = useState(false);
	console.log(slug);
	return (
		<>
			<section className="mb-10 mt-10 flex w-full flex-col gap-10 md:flex-row">
				<div className="relative h-72 w-72 md:h-96 md:w-96">
					<Image
						src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
						alt="Picture of the author"
						fill
						className="inset-0 h-full w-full rounded-md object-cover object-center shadow-xl"
					/>
				</div>
				<article className="flex max-w-md flex-col gap-2">
					<h1 className="text-left text-2xl font-bold">Headphones</h1>
					<p className="text-md font-bold">
						Price: <span className="font-normal text-green-500">49.99 $</span>
					</p>
					<p>
						<strong className="flex items-center gap-2">
							stock: <CheckIcon />{" "}
						</strong>
					</p>
					<p className={clsx(`${!readMore && "truncate"}`)}>
						<strong>Description: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam, aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
						aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
						aspernatur. amet consectetur adipisicing elit. Quisquam, aspernatur. Lorem ipsum dolor
						sit amet consectetur adipisicing elit. Quisquam, aspernatur. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Quisquam, aspernatur. amet consectetur adipisicing elit.
						Quisquam, aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
						aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
						aspernatur. amet consectetur adipisicing elit. Quisquam, aspernatur. Lorem ipsum dolor
						sit amet consectetur adipisicing elit. Quisquam, aspernatur. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Quisquam, aspernatur.
					</p>
					<span onClick={() => setReadMore(!readMore)} role="button" className="italic underline">
						{readMore ? "collapse" : "read more"}
					</span>
					<button className="mt-3 h-14 w-full rounded-xl bg-gradient-to-tr from-violet-500 to-sky-500 px-4 py-3 font-bold text-white dark:from-violet-700 dark:to-sky-700">
						Add to Cart
					</button>
				</article>
			</section>
			<ProductReviews />
		</>
	);
};

export default ProductDetailsPage;
