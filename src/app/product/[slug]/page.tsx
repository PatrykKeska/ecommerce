import { notFound } from "next/navigation";
import { loadEnvConfig } from "@next/env";
import { ProductReviews } from "@/ui/organisms/ProductReviews/ProductReviews";
import { getProductDetails } from "@/api/getProductDetails";
import { ProductDetailsDescriptionWithImage } from "@/ui/molecules/ProductDetailsDescriptionWithImage";
type ProductDetailsPageType = {
	params: {
		slug: string;
	};
};

const ProductDetailsPage = async ({ params: { slug } }: ProductDetailsPageType) => {
	const response = await getProductDetails(slug);
	const productDetails = response.products?.data[0]?.attributes;
	loadEnvConfig(process.cwd());
	if (!productDetails) {
		throw notFound();
	}

	return (
		<>
			<ProductDetailsDescriptionWithImage {...productDetails} />
			<ProductReviews />
		</>
	);
};

export default ProductDetailsPage;
