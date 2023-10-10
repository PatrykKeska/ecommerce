import { PaginationGetCategoriesDetailsDocument } from "@/gql/graphql";
import { executeGrapgql } from "@/utils/fetchGraphQL";

export const getCategoryPaginationDetails = async (category: string) => {
	const graphqlResponse = await executeGrapgql(PaginationGetCategoriesDetailsDocument, {
		category,
	});
	return graphqlResponse;
};
