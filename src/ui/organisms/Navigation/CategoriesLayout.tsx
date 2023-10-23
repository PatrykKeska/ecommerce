import { getCategoriesDetails } from "@/api/getCategoriesDetails";
import { CategoryCart } from "@/ui/atoms/Navigation/CategoryCart";

export const CategoriesLayout = async () => {
	const categoriesDetails = await getCategoriesDetails();

	return (
		<>
			<ul className="mx-auto grid grid-cols-1 items-center gap-6 px-5 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ">
				{categoriesDetails.categories?.data.map((category) => (
					<CategoryCart
						key={category.attributes?.categoryName}
						pathname={category.attributes?.categoryName}
						coverImage={
							category.attributes?.products?.data[
								Math.floor(Math.random() * category.attributes?.products?.data.length)
							]?.attributes?.productImageCover.data?.attributes?.url
						}
						label={category.attributes?.categoryName}
					/>
				))}
			</ul>
		</>
	);
};
