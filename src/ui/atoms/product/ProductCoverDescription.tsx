import type { ProductItemType } from "../../organisms/ProductList/ProductList.type";
import { ProductRatingStar } from "./ProductRatingStar";
import { renderStars } from "@/utils/generateStars";
import { formatCurrency } from "@/utils/formatCurrency";

export const ProductCoverDescription = ({
	productName,
	category,
	price,
	rating,
}: ProductItemType) => {
	return (
		<>
			<div className=" flex p-2 text-sm">
				<div className="flex w-full flex-col rounded-b-lg">
					<div className="flex justify-between">
						<h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
							{productName}
						</h3>
						<p className="mt-1.5 max-w-[45ch] text-xs text-gray-500">{category}</p>
					</div>
					<div className="mt-4 flex w-full items-center justify-between ">
						<div className="flex items-center gap-2">
							<p className="text-gray-900">{rating}/5</p>

							{rating && <div className="flex">{renderStars(rating, <ProductRatingStar />)}</div>}
						</div>
						<p className="text-gray-900">${formatCurrency(price)}</p>
					</div>
				</div>
			</div>
		</>
	);
};
