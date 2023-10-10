import { notFound } from "next/navigation";
import { CategoryProductsGetPaginatedListDocument } from "@/gql/graphql";
import { executeGrapgql } from "@/utils/fetchGraphQL";

export const getCategoryProductsList = async (category: string, page: number) => {
	const graphqlResponse = await executeGrapgql(CategoryProductsGetPaginatedListDocument, {
		category,
		page,
	});
	if (!graphqlResponse.products?.data[0]) {
		throw notFound();
	}

	return graphqlResponse;
};
