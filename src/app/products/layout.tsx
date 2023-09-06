import { ThemeController } from "@/_app";

type NavigationLayout = {
	children: React.ReactNode;
};

const ProductsLayout = ({ children }: NavigationLayout) => {
	return (
		<ThemeController>
			<section>{children}</section>
		</ThemeController>
	);
};

export default ProductsLayout;
