import { ProductGetListDocument, type TypedDocumentString } from "@/gql/graphql";

export const getProductsList = async () => {
	const graphqlResponse = await executeGrapgql(ProductGetListDocument, {});
	return graphqlResponse;
};
const executeGrapgql = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
): Promise<TResult> => {
	// ): Promise<grap> => {
	if (!process.env.GRAPHQL_URL) throw new Error("GRAPHQL_URL is not defined");
	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify({
			query,
			variables,
		}),
	});
	type GraphQLResponse<T> =
		| { data?: undefined; errors: { message: string }[] }
		| { data: T; errors?: undefined };

	const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;
	if (graphqlResponse.errors) {
		throw TypeError("GraphQL Error:", { cause: graphqlResponse.errors });
	}

	return graphqlResponse.data;
};
