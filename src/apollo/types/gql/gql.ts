/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

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
    "\n  fragment ButtonItems on ComponentGeneralButton {\n    btnText\n    redirectTo\n  }\n": types.ButtonItemsFragmentDoc,
    "\n  fragment Image on UploadFileEntityResponse {\n    data {\n      id\n      attributes {\n        name\n        url\n        formats\n        createdAt\n        updatedAt\n      }\n    }\n  }\n": types.ImageFragmentDoc,
    "\n  fragment SliderItems on ComponentGeneralSectionItems {\n    title\n    subtitle\n    description\n    image {\n      ...Image\n    }\n  }\n  \n": types.SliderItemsFragmentDoc,
    "\n  fragment TabsItems on ComponentGeneralBlogItems {\n    title\n    description\n    artical {\n      data {\n        attributes {\n          mainTitle\n          details {\n            title\n            description\n          }\n          image {\n            ...Image\n          }\n          slug\n        }\n      }\n    }\n  }\n  \n": types.TabsItemsFragmentDoc,
    "\n  query homePage($slug: String) {\n    pages(filters: { slug: { eq: $slug } }) {\n      data {\n        attributes {\n          shortName\n          slug\n          createdAt\n          updatedAt\n          publishedAt\n          contentSection {\n            __typename\n            ... on ComponentCardsHeroSection {\n              id\n              sliderItems {\n                ...SliderItems\n              }\n            }\n            ... on ComponentCardsTabSection {\n              id\n              tabsItems {\n                ...TabsItems\n              }\n            }\n            ... on ComponentCardsHeaderSection {\n              id\n              title\n              description\n              offerButton {\n                ...ButtonItems\n              }\n              toggle\n            }\n          }\n        }\n      }\n    }\n  }\n  \n  \n  \n  \n": types.HomePageDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ButtonItems on ComponentGeneralButton {\n    btnText\n    redirectTo\n  }\n"): (typeof documents)["\n  fragment ButtonItems on ComponentGeneralButton {\n    btnText\n    redirectTo\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Image on UploadFileEntityResponse {\n    data {\n      id\n      attributes {\n        name\n        url\n        formats\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment Image on UploadFileEntityResponse {\n    data {\n      id\n      attributes {\n        name\n        url\n        formats\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment SliderItems on ComponentGeneralSectionItems {\n    title\n    subtitle\n    description\n    image {\n      ...Image\n    }\n  }\n  \n"): (typeof documents)["\n  fragment SliderItems on ComponentGeneralSectionItems {\n    title\n    subtitle\n    description\n    image {\n      ...Image\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment TabsItems on ComponentGeneralBlogItems {\n    title\n    description\n    artical {\n      data {\n        attributes {\n          mainTitle\n          details {\n            title\n            description\n          }\n          image {\n            ...Image\n          }\n          slug\n        }\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  fragment TabsItems on ComponentGeneralBlogItems {\n    title\n    description\n    artical {\n      data {\n        attributes {\n          mainTitle\n          details {\n            title\n            description\n          }\n          image {\n            ...Image\n          }\n          slug\n        }\n      }\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query homePage($slug: String) {\n    pages(filters: { slug: { eq: $slug } }) {\n      data {\n        attributes {\n          shortName\n          slug\n          createdAt\n          updatedAt\n          publishedAt\n          contentSection {\n            __typename\n            ... on ComponentCardsHeroSection {\n              id\n              sliderItems {\n                ...SliderItems\n              }\n            }\n            ... on ComponentCardsTabSection {\n              id\n              tabsItems {\n                ...TabsItems\n              }\n            }\n            ... on ComponentCardsHeaderSection {\n              id\n              title\n              description\n              offerButton {\n                ...ButtonItems\n              }\n              toggle\n            }\n          }\n        }\n      }\n    }\n  }\n  \n  \n  \n  \n"): (typeof documents)["\n  query homePage($slug: String) {\n    pages(filters: { slug: { eq: $slug } }) {\n      data {\n        attributes {\n          shortName\n          slug\n          createdAt\n          updatedAt\n          publishedAt\n          contentSection {\n            __typename\n            ... on ComponentCardsHeroSection {\n              id\n              sliderItems {\n                ...SliderItems\n              }\n            }\n            ... on ComponentCardsTabSection {\n              id\n              tabsItems {\n                ...TabsItems\n              }\n            }\n            ... on ComponentCardsHeaderSection {\n              id\n              title\n              description\n              offerButton {\n                ...ButtonItems\n              }\n              toggle\n            }\n          }\n        }\n      }\n    }\n  }\n  \n  \n  \n  \n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;