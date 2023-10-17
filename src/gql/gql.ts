/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query CategoryProductsGetPaginatedList($category: String!, $page: Int!) {\n  products(\n    filters: {category: {categoryName: {eq: $category}}}\n    pagination: {page: $page, pageSize: 10}\n  ) {\n    data {\n      attributes {\n        productName\n        productPrice\n        slug\n        reviews {\n          data {\n            attributes {\n              reviewRate\n            }\n          }\n        }\n        category {\n          data {\n            attributes {\n              categoryName\n            }\n          }\n        }\n        productImageCover {\n          data {\n            attributes {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.CategoryProductsGetPaginatedListDocument,
    "query PaginationGetCategoriesDetails($category: String!) {\n  products(filters: {category: {categoryName: {eq: $category}}}) {\n    meta {\n      pagination {\n        total\n        page\n        pageSize\n        pageCount\n      }\n    }\n  }\n}": types.PaginationGetCategoriesDetailsDocument,
    "query PaginationGetDetails {\n  products {\n    meta {\n      pagination {\n        total\n        page\n        pageSize\n        pageCount\n      }\n    }\n  }\n}": types.PaginationGetDetailsDocument,
    "fragment ProductCoverDescription on Product {\n  productName\n  productPrice\n  reviews {\n    data {\n      attributes {\n        reviewRate\n      }\n    }\n  }\n  category {\n    data {\n      attributes {\n        categoryName\n      }\n    }\n  }\n}": types.ProductCoverDescriptionFragmentDoc,
    "fragment ProductDetails on Product {\n  productName\n  productPrice\n  productPrice\n  productDescription\n  stock\n  productImageCover {\n    data {\n      attributes {\n        url\n      }\n    }\n  }\n}": types.ProductDetailsFragmentDoc,
    "query ProudctGetDetails($slug: String!) {\n  products(filters: {slug: {eq: $slug}}) {\n    data {\n      attributes {\n        productName\n        productPrice\n        stock\n        productDescription\n        reviews {\n          data {\n            attributes {\n              reviewRate\n              reviewTitle\n              reviewDescription\n              userName\n            }\n          }\n        }\n        productImageCover {\n          data {\n            attributes {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.ProudctGetDetailsDocument,
    "query ProductGetList {\n  products(pagination: {pageSize: 50}) {\n    data {\n      attributes {\n        productName\n        productPrice\n        slug\n        reviews {\n          data {\n            attributes {\n              reviewRate\n            }\n          }\n        }\n        category {\n          data {\n            attributes {\n              categoryName\n            }\n          }\n        }\n        productImageCover {\n          data {\n            attributes {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.ProductGetListDocument,
    "fragment ProductListDetails on ProductEntity {\n  attributes {\n    productName\n    productPrice\n    productID\n    reviews {\n      data {\n        attributes {\n          reviewRate\n        }\n      }\n    }\n    slug\n    category {\n      data {\n        attributes {\n          categoryName\n        }\n      }\n    }\n    productImageCover {\n      data {\n        attributes {\n          url\n        }\n      }\n    }\n  }\n}": types.ProductListDetailsFragmentDoc,
    "query ProductsGetAllListPagination($page: Int!) {\n  products(sort: \"id:asc\", pagination: {page: $page, pageSize: 10}) {\n    data {\n      attributes {\n        productName\n        productPrice\n        slug\n        reviews {\n          data {\n            attributes {\n              reviewRate\n            }\n          }\n        }\n        category {\n          data {\n            attributes {\n              categoryName\n            }\n          }\n        }\n        productImageCover {\n          data {\n            attributes {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.ProductsGetAllListPaginationDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryProductsGetPaginatedList($category: String!, $page: Int!) {\n  products(\n    filters: {category: {categoryName: {eq: $category}}}\n    pagination: {page: $page, pageSize: 10}\n  ) {\n    data {\n      attributes {\n        productName\n        productPrice\n        slug\n        reviews {\n          data {\n            attributes {\n              reviewRate\n            }\n          }\n        }\n        category {\n          data {\n            attributes {\n              categoryName\n            }\n          }\n        }\n        productImageCover {\n          data {\n            attributes {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CategoryProductsGetPaginatedListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query PaginationGetCategoriesDetails($category: String!) {\n  products(filters: {category: {categoryName: {eq: $category}}}) {\n    meta {\n      pagination {\n        total\n        page\n        pageSize\n        pageCount\n      }\n    }\n  }\n}"): typeof import('./graphql').PaginationGetCategoriesDetailsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query PaginationGetDetails {\n  products {\n    meta {\n      pagination {\n        total\n        page\n        pageSize\n        pageCount\n      }\n    }\n  }\n}"): typeof import('./graphql').PaginationGetDetailsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductCoverDescription on Product {\n  productName\n  productPrice\n  reviews {\n    data {\n      attributes {\n        reviewRate\n      }\n    }\n  }\n  category {\n    data {\n      attributes {\n        categoryName\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductCoverDescriptionFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductDetails on Product {\n  productName\n  productPrice\n  productPrice\n  productDescription\n  stock\n  productImageCover {\n    data {\n      attributes {\n        url\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductDetailsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProudctGetDetails($slug: String!) {\n  products(filters: {slug: {eq: $slug}}) {\n    data {\n      attributes {\n        productName\n        productPrice\n        stock\n        productDescription\n        reviews {\n          data {\n            attributes {\n              reviewRate\n              reviewTitle\n              reviewDescription\n              userName\n            }\n          }\n        }\n        productImageCover {\n          data {\n            attributes {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProudctGetDetailsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetList {\n  products(pagination: {pageSize: 50}) {\n    data {\n      attributes {\n        productName\n        productPrice\n        slug\n        reviews {\n          data {\n            attributes {\n              reviewRate\n            }\n          }\n        }\n        category {\n          data {\n            attributes {\n              categoryName\n            }\n          }\n        }\n        productImageCover {\n          data {\n            attributes {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListDetails on ProductEntity {\n  attributes {\n    productName\n    productPrice\n    productID\n    reviews {\n      data {\n        attributes {\n          reviewRate\n        }\n      }\n    }\n    slug\n    category {\n      data {\n        attributes {\n          categoryName\n        }\n      }\n    }\n    productImageCover {\n      data {\n        attributes {\n          url\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductListDetailsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetAllListPagination($page: Int!) {\n  products(sort: \"id:asc\", pagination: {page: $page, pageSize: 10}) {\n    data {\n      attributes {\n        productName\n        productPrice\n        slug\n        reviews {\n          data {\n            attributes {\n              reviewRate\n            }\n          }\n        }\n        category {\n          data {\n            attributes {\n              categoryName\n            }\n          }\n        }\n        productImageCover {\n          data {\n            attributes {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetAllListPaginationDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
