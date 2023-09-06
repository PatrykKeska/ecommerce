import { ProductReviews } from "@/ui/organisms/ProductReviews/ProductReviews";

type ProductDetailsPageType = {
	params: {
		slug: string;
	};
};

const ProductDetailsPage = ({ params: { slug } }: ProductDetailsPageType) => {
	return (
		<>
			<h1>product id : {slug}</h1>
			<ProductReviews />
		</>
	);
};

// eslint-disable-next-line import/no-default-export
export default ProductDetailsPage;
