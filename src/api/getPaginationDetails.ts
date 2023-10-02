import { PaginationGetDetailsDocument } from "@/gql/graphql";
import { executeGrapgql } from "@/utils/fetchGraphQL";

export const getPaginationDetails = async () => {
	const graphqlResponse = await executeGrapgql(PaginationGetDetailsDocument, {});
	return graphqlResponse;
};
