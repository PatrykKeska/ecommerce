import { type ProductCoverDescriptionFragment } from "@/gql/graphql";

type ProductReviewsFragment = {
	reviews: ProductCoverDescriptionFragment["reviews"];
};

export const calculateAvrageRatingForProduct = (reviewsObject: ProductReviewsFragment): number => {
	if (reviewsObject === null || reviewsObject === undefined) return 0;
	if (reviewsObject.reviews === null || reviewsObject.reviews === undefined) return 0;
	if (reviewsObject.reviews.data === null || reviewsObject.reviews.data === undefined) return 0;

	const avgRate = reviewsObject.reviews.data.reduce((acc, curr) => {
		if (curr.attributes?.reviewRate === null || curr.attributes?.reviewRate === undefined) {
			return acc + 0;
		}
		const check = acc + curr.attributes?.reviewRate;
		if (reviewsObject.reviews === null || reviewsObject.reviews === undefined) return 0;
		const result = check / reviewsObject.reviews.data.length;
		return result;
	}, 0);
	return avgRate;
};
