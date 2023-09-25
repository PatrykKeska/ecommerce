import { loadEnvConfig } from "@next/env";
import type { CodegenConfig } from "@graphql-codegen/cli";

loadEnvConfig(process.cwd());
const config: CodegenConfig = {
	overwrite: true,
	ignoreNoDocuments: true,
	schema: process.env.GRAPHQL_URL,
	documents: "src/graphql/*.graphql",
	generates: {
		"src/gql/": {
			preset: "client",
			presetConfig: {
				framentMasking: false,
			},
			config: {
				iseTypeImports: true,
				enumasTypes: true,
				defaultScalarType: "unknown",
				skipTypename: true,
				documentMode: "string",
			},
		},
	},
};

export default config;
