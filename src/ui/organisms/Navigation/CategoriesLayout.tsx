import { CategoryCart } from "@/ui/atoms/Navigation/CategoryCart";
import { categoriesNavSchema } from "@/utils/categoriesNavSchema";

export const CategoriesLayout = () => {
	return (
		<>
			<ul className="mx-auto grid grid-cols-1 items-center gap-6 px-5 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ">
				{categoriesNavSchema.map((category) => (
					<CategoryCart
						key={category.pathname}
						pathname={category.pathname}
						coverImage={category.coverImage}
						label={category.label}
					/>
				))}
			</ul>
		</>
	);
};
