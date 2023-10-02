import { ProductsGetAllListPaginationDocument } from "@/gql/graphql";
import { executeGrapgql } from "@/utils/fetchGraphQL";

export const getProductsList = async (page: number) => {
	const graphqlResponse = await executeGrapgql(ProductsGetAllListPaginationDocument, {
		page,
	});
	return graphqlResponse;
};
