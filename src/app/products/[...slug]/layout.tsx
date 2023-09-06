type ProductDetailsLayoutType = {
	children: React.ReactNode;
};

const ProductDetailsLayout = ({ children }: ProductDetailsLayoutType) => {
	return <section className="p-4">{children}</section>;
};

export default ProductDetailsLayout;
