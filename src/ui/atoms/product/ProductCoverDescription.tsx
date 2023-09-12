import { ProductRatingStar } from "./ProductRatingStar";
import { renderStars } from "@/utils/generateStars";
import { formatCurrency } from "@/utils/formatCurrency";
import { type ApiProduct } from "@/api/getProducts";

export const ProductCoverDescription = ({ id, title, price, category, rating }: ApiProduct) => {
	return (
		<>
			<div className="flex p-2 text-sm">
				<div className="flex w-full flex-col rounded-b-lg">
					<div className="flex justify-between">
						<h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4 dark:text-white">
							{title}
						</h3>
						<p className="mt-1.5 max-w-[45ch] text-xs text-gray-500 dark:text-gray-300">
							{category}
						</p>
					</div>
					<div className="mt-4 flex w-full items-center justify-between ">
						<div className="flex items-center gap-2">
							<p className="text-gray-900 dark:text-white">{rating.rate}/5</p>

							{rating && (
								<div className="flex">
									{renderStars(rating.rate, <ProductRatingStar key={id} />)}
								</div>
							)}
						</div>
						<p className="text-gray-900 dark:text-white">${formatCurrency(price)}</p>
					</div>
				</div>
			</div>
		</>
	);
};
