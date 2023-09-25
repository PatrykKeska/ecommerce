import { type ReactNode } from "react";

type Props = {
	children: ReactNode;
};

const ProductDetailsLayout = ({ children }: Props) => {
	return <section className="mx-auto max-w-7xl overflow-hidden p-4 md:p-8">{children}</section>;
};

export default ProductDetailsLayout;
