import { type ResultOf, type DocumentTypeDecoration } from "@graphql-typed-document-node/core";
import { type Incremental, type TypedDocumentString } from "./graphql";

export type FragmentType<TDocumentType extends DocumentTypeDecoration<unknown, unknown>> =
	TDocumentType extends DocumentTypeDecoration<infer TType, unknown>
		? [TType] extends [{ " $fragmentName"?: infer TKey }]
			? TKey extends string
				? { " $fragmentRefs"?: { [key in TKey]: TType } }
				: never
			: never
		: never;

// return non-nullable if `fragmentType` is non-nullable
export function useFragment<TType>(
	_documentNode: DocumentTypeDecoration<TType, unknown>,
	fragmentType: FragmentType<DocumentTypeDecoration<TType, unknown>>,
): TType;
// return nullable if `fragmentType` is nullable
export function useFragment<TType>(
	_documentNode: DocumentTypeDecoration<TType, unknown>,
	fragmentType: FragmentType<DocumentTypeDecoration<TType, unknown>> | null | undefined,
): TType | null | undefined;
// return array of non-nullable if `fragmentType` is array of non-nullable
export function useFragment<TType>(
	_documentNode: DocumentTypeDecoration<TType, unknown>,
	fragmentType: ReadonlyArray<FragmentType<DocumentTypeDecoration<TType, unknown>>>,
): ReadonlyArray<TType>;
// return array of nullable if `fragmentType` is array of nullable
export function useFragment<TType>(
	_documentNode: DocumentTypeDecoration<TType, unknown>,
	fragmentType:
		| ReadonlyArray<FragmentType<DocumentTypeDecoration<TType, unknown>>>
		| null
		| undefined,
): ReadonlyArray<TType> | null | undefined;
export function useFragment<TType>(
	_documentNode: DocumentTypeDecoration<TType, unknown>,
	fragmentType:
		| FragmentType<DocumentTypeDecoration<TType, unknown>>
		| ReadonlyArray<FragmentType<DocumentTypeDecoration<TType, unknown>>>
		| null
		| undefined,
): TType | ReadonlyArray<TType> | null | undefined {
	return fragmentType as TType | ReadonlyArray<TType> | null | undefined;
}

export function makeFragmentData<
	F extends DocumentTypeDecoration<unknown, unknown>,
	FT extends ResultOf<F>,
>(data: FT, _fragment: F): FragmentType<F> {
	return data as FragmentType<F>;
}
export function isFragmentReady<TQuery, TFrag>(
	queryNode: TypedDocumentString<TQuery, unknown>,
	fragmentNode: TypedDocumentString<TFrag, unknown>,
	data: FragmentType<TypedDocumentString<Incremental<TFrag>, unknown>> | null | undefined,
): data is FragmentType<typeof fragmentNode> {
	const deferredFields = queryNode.__meta__?.deferredFields as Record<string, (keyof TFrag)[]>;
	const fragName = fragmentNode.__meta__?.fragmentName as string | undefined;

	if (!deferredFields || !fragName) return true;

	const fields = deferredFields[fragName] ?? [];
	return fields.length > 0 && fields.every((field) => data && field in data);
}
