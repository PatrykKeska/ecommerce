import { ProductRatingStar } from "./ProductRatingStar";
import { type ProductCoverDescriptionFragment } from "@/gql/graphql";
import { calculateAvrageRatingForProduct } from "@/utils/calculateAvgRateForProduct";
import { formatCurrency } from "@/utils/formatCurrency";
import { renderStars } from "@/utils/generateStars";

export const ProductCoverDescription = ({
	productName,
	productPrice,
	category,
	reviews,
}: ProductCoverDescriptionFragment) => {
	const avgRate = calculateAvrageRatingForProduct({ reviews });

	return (
		<>
			<div className="flex p-2 text-sm">
				<div className="flex w-full flex-col rounded-b-lg">
					<div className="flex justify-between gap-5">
						<h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4 dark:text-white">
							{productName}
						</h3>
						<p className="mt-1.5 max-w-[45ch] text-xs text-gray-500 dark:text-gray-300">
							{category?.data?.attributes?.categoryName}
							{category?.data === null && "No category"}
						</p>
					</div>
					<div className="mt-4 flex w-full items-center justify-between ">
						<div className="flex items-center gap-2">
							{avgRate > 0 && (
								<div className="flex">
									{renderStars(avgRate, <ProductRatingStar key={productName} />)}
								</div>
							)}
						</div>
						<p className="text-gray-900 dark:text-white">${formatCurrency(Number(productPrice))}</p>
					</div>
				</div>
			</div>
		</>
	);
};
