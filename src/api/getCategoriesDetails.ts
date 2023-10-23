import { CategoriesGetDetailsDocument } from "@/gql/graphql";
import { executeGrapgql } from "@/utils/fetchGraphQL";

export const getCategoriesDetails = async () => {
	const graphqlResponse = await executeGrapgql(CategoriesGetDetailsDocument, {});
	return graphqlResponse;
};
