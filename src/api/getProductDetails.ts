import { ProudctGetDetailsDocument } from "@/gql/graphql";
import { executeGrapgql } from "@/utils/fetchGraphQL";

export const getProductDetails = async (slug: string) => {
	const graphqlResponse = await executeGrapgql(ProudctGetDetailsDocument, { slug });
	return graphqlResponse;
};
