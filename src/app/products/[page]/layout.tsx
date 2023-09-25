import Link from "next/link";
import { ThemeController } from "@/_app";
import { getTotalProduct } from "@/api/getTotalProducts";

type NavigationLayout = {
	children: React.ReactNode;
};

const ProductsLayout = async ({ children }: NavigationLayout) => {
	const totalProducts = await getTotalProduct();
	const pages = Array.from(Array(totalProducts + 1).keys()).slice(1);
	return (
		<ThemeController>
			<section>{children}</section>
			{pages.map((page) => (
				<Link key={page} href={{ pathname: `/products/${page}` }}>
					{page}
				</Link>
			))}
		</ThemeController>
	);
};

export default ProductsLayout;
