import clsx from "clsx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CheckIcon } from "@/assets/icons/CheckIcon";
import { OutofStockIcon } from "@/assets/icons/OutofStockIcon";

type ProductDetailsDescriptionProps = {
	productName: string;
	productDescription: string;
	productPrice: number;
	stock: boolean;
	slug: string;
};

export const ProductDetailsDescription = ({
	productName,
	productDescription,
	productPrice,
	stock,
	slug,
}: ProductDetailsDescriptionProps) => {
	async function addProductToCartAction() {
		"use server";
		console.log(slug);
	}

	return (
		<>
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
				<form action={addProductToCartAction}>
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
				</form>
			</article>
		</>
	);
};
