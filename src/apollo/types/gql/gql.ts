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
    "\n  fragment ResourcesItems on ComponentGeneralResourceItems {\n    groupName\n    selectresource {\n      data {\n        attributes {\n          title\n          image {\n            ...Image\n          }\n          description\n          file {\n            ...Image\n          }\n          readMoreLink\n          fileToggle\n          readMoreToggle\n        }\n      }\n    }\n  }\n  \n": types.ResourcesItemsFragmentDoc,
    "\n  fragment SectionItems on ComponentGeneralSectionItems {\n    title\n    subtitle\n    description\n    image {\n      ...Image\n    }\n  }\n  \n": types.SectionItemsFragmentDoc,
    "\n  fragment TabsItems on ComponentGeneralBlogItems {\n    title\n    description\n    artical {\n      data {\n        attributes {\n          mainTitle\n          details {\n            title\n            description\n          }\n          image {\n            ...Image\n          }\n          slug\n        }\n      }\n    }\n  }\n  \n": types.TabsItemsFragmentDoc,
    "\n  fragment TestimonialsItems on ComponentGeneralTestimonialsItems {\n    title\n    description\n    name\n    position\n    image {\n      ...Image\n    }\n  }\n  \n": types.TestimonialsItemsFragmentDoc,
    "\n  query footerpage {\n    footerSection {\n      data {\n        attributes {\n          description\n          socialItems {\n            image {\n              ...Image\n            }\n            link\n          }\n        }\n      }\n    }\n  }\n  \n": types.FooterpageDocument,
    "\n  query headerpage {\n    headerSection {\n      data {\n        attributes {\n          title\n          description\n          offerButton {\n            ...ButtonItems\n          }\n          toggle\n        }\n      }\n    }\n  }\n  \n": types.HeaderpageDocument,
    "\n  query homePage($slug: String) {\n    pages(filters: { slug: { eq: $slug } }) {\n      data {\n        attributes {\n          shortName\n          slug\n          createdAt\n          updatedAt\n          publishedAt\n          contentSection {\n            __typename\n            ... on ComponentCardsHeroSection {\n              id\n              sliderItems {\n                ...SectionItems\n              }\n            }\n            ... on ComponentCardsTabSection {\n              id\n              tabsItems {\n                ...TabsItems\n              }\n            }\n            ... on ComponentCardsTestimonialsSection {\n              id\n              testimonialsitems {\n                ...TestimonialsItems\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  \n  \n  \n  \n": types.HomePageDocument,
    "\n  query resourcesPage($slug: String) {\n    pages(filters: { slug: { eq: $slug } }) {\n      data {\n        attributes {\n          __typename\n          shortName\n          slug\n          createdAt\n          updatedAt\n          contentSection {\n            __typename\n            ... on ComponentCardsResourcesSection {\n              mainTitle\n              groupNames {\n                ...ResourcesItems\n              }\n              resourcesDateItems {\n                date\n                title\n                subTitle\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  \n  \n": types.ResourcesPageDocument,
    "\n  query servicesPage($slug: String) {\n    pages(filters: { slug: { eq: $slug } }) {\n      data {\n        attributes {\n          shortName\n          slug\n          createdAt\n          updatedAt\n          publishedAt\n          contentSection {\n            __typename\n            ... on ComponentCardsTestimonialsSection {\n              id\n              testimonialsitems {\n                ...TestimonialsItems\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n\n  \n  \n": types.ServicesPageDocument,
    "\n  query technologyPage($slug: String) {\n    pages(filters: { slug: { eq: $slug } }) {\n      data {\n        attributes {\n          shortName\n          slug\n          createdAt\n          updatedAt\n          publishedAt\n          contentSection {\n            __typename\n            ... on ComponentCardsHeroSection {\n              id\n              sliderItems {\n                ...SectionItems\n              }\n            }\n            ... on ComponentCardsTechnologySection {\n              id\n              head {\n                title\n                description\n              }\n              section {\n                ...SectionItems\n              }\n            }\n            ... on ComponentCardsTabSection {\n              id\n              tabsItems {\n                ...TabsItems\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  \n  \n": types.TechnologyPageDocument,
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
export function graphql(source: "\n  fragment ResourcesItems on ComponentGeneralResourceItems {\n    groupName\n    selectresource {\n      data {\n        attributes {\n          title\n          image {\n            ...Image\n          }\n          description\n          file {\n            ...Image\n          }\n          readMoreLink\n          fileToggle\n          readMoreToggle\n        }\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  fragment ResourcesItems on ComponentGeneralResourceItems {\n    groupName\n    selectresource {\n      data {\n        attributes {\n          title\n          image {\n            ...Image\n          }\n          description\n          file {\n            ...Image\n          }\n          readMoreLink\n          fileToggle\n          readMoreToggle\n        }\n      }\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment SectionItems on ComponentGeneralSectionItems {\n    title\n    subtitle\n    description\n    image {\n      ...Image\n    }\n  }\n  \n"): (typeof documents)["\n  fragment SectionItems on ComponentGeneralSectionItems {\n    title\n    subtitle\n    description\n    image {\n      ...Image\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment TabsItems on ComponentGeneralBlogItems {\n    title\n    description\n    artical {\n      data {\n        attributes {\n          mainTitle\n          details {\n            title\n            description\n          }\n          image {\n            ...Image\n          }\n          slug\n        }\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  fragment TabsItems on ComponentGeneralBlogItems {\n    title\n    description\n    artical {\n      data {\n        attributes {\n          mainTitle\n          details {\n            title\n            description\n          }\n          image {\n            ...Image\n          }\n          slug\n        }\n      }\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment TestimonialsItems on ComponentGeneralTestimonialsItems {\n    title\n    description\n    name\n    position\n    image {\n      ...Image\n    }\n  }\n  \n"): (typeof documents)["\n  fragment TestimonialsItems on ComponentGeneralTestimonialsItems {\n    title\n    description\n    name\n    position\n    image {\n      ...Image\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query footerpage {\n    footerSection {\n      data {\n        attributes {\n          description\n          socialItems {\n            image {\n              ...Image\n            }\n            link\n          }\n        }\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  query footerpage {\n    footerSection {\n      data {\n        attributes {\n          description\n          socialItems {\n            image {\n              ...Image\n            }\n            link\n          }\n        }\n      }\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query headerpage {\n    headerSection {\n      data {\n        attributes {\n          title\n          description\n          offerButton {\n            ...ButtonItems\n          }\n          toggle\n        }\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  query headerpage {\n    headerSection {\n      data {\n        attributes {\n          title\n          description\n          offerButton {\n            ...ButtonItems\n          }\n          toggle\n        }\n      }\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query homePage($slug: String) {\n    pages(filters: { slug: { eq: $slug } }) {\n      data {\n        attributes {\n          shortName\n          slug\n          createdAt\n          updatedAt\n          publishedAt\n          contentSection {\n            __typename\n            ... on ComponentCardsHeroSection {\n              id\n              sliderItems {\n                ...SectionItems\n              }\n            }\n            ... on ComponentCardsTabSection {\n              id\n              tabsItems {\n                ...TabsItems\n              }\n            }\n            ... on ComponentCardsTestimonialsSection {\n              id\n              testimonialsitems {\n                ...TestimonialsItems\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  \n  \n  \n  \n"): (typeof documents)["\n  query homePage($slug: String) {\n    pages(filters: { slug: { eq: $slug } }) {\n      data {\n        attributes {\n          shortName\n          slug\n          createdAt\n          updatedAt\n          publishedAt\n          contentSection {\n            __typename\n            ... on ComponentCardsHeroSection {\n              id\n              sliderItems {\n                ...SectionItems\n              }\n            }\n            ... on ComponentCardsTabSection {\n              id\n              tabsItems {\n                ...TabsItems\n              }\n            }\n            ... on ComponentCardsTestimonialsSection {\n              id\n              testimonialsitems {\n                ...TestimonialsItems\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  \n  \n  \n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query resourcesPage($slug: String) {\n    pages(filters: { slug: { eq: $slug } }) {\n      data {\n        attributes {\n          __typename\n          shortName\n          slug\n          createdAt\n          updatedAt\n          contentSection {\n            __typename\n            ... on ComponentCardsResourcesSection {\n              mainTitle\n              groupNames {\n                ...ResourcesItems\n              }\n              resourcesDateItems {\n                date\n                title\n                subTitle\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  \n  \n"): (typeof documents)["\n  query resourcesPage($slug: String) {\n    pages(filters: { slug: { eq: $slug } }) {\n      data {\n        attributes {\n          __typename\n          shortName\n          slug\n          createdAt\n          updatedAt\n          contentSection {\n            __typename\n            ... on ComponentCardsResourcesSection {\n              mainTitle\n              groupNames {\n                ...ResourcesItems\n              }\n              resourcesDateItems {\n                date\n                title\n                subTitle\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  \n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query servicesPage($slug: String) {\n    pages(filters: { slug: { eq: $slug } }) {\n      data {\n        attributes {\n          shortName\n          slug\n          createdAt\n          updatedAt\n          publishedAt\n          contentSection {\n            __typename\n            ... on ComponentCardsTestimonialsSection {\n              id\n              testimonialsitems {\n                ...TestimonialsItems\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n\n  \n  \n"): (typeof documents)["\n  query servicesPage($slug: String) {\n    pages(filters: { slug: { eq: $slug } }) {\n      data {\n        attributes {\n          shortName\n          slug\n          createdAt\n          updatedAt\n          publishedAt\n          contentSection {\n            __typename\n            ... on ComponentCardsTestimonialsSection {\n              id\n              testimonialsitems {\n                ...TestimonialsItems\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n\n  \n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query technologyPage($slug: String) {\n    pages(filters: { slug: { eq: $slug } }) {\n      data {\n        attributes {\n          shortName\n          slug\n          createdAt\n          updatedAt\n          publishedAt\n          contentSection {\n            __typename\n            ... on ComponentCardsHeroSection {\n              id\n              sliderItems {\n                ...SectionItems\n              }\n            }\n            ... on ComponentCardsTechnologySection {\n              id\n              head {\n                title\n                description\n              }\n              section {\n                ...SectionItems\n              }\n            }\n            ... on ComponentCardsTabSection {\n              id\n              tabsItems {\n                ...TabsItems\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  \n  \n"): (typeof documents)["\n  query technologyPage($slug: String) {\n    pages(filters: { slug: { eq: $slug } }) {\n      data {\n        attributes {\n          shortName\n          slug\n          createdAt\n          updatedAt\n          publishedAt\n          contentSection {\n            __typename\n            ... on ComponentCardsHeroSection {\n              id\n              sliderItems {\n                ...SectionItems\n              }\n            }\n            ... on ComponentCardsTechnologySection {\n              id\n              head {\n                title\n                description\n              }\n              section {\n                ...SectionItems\n              }\n            }\n            ... on ComponentCardsTabSection {\n              id\n              tabsItems {\n                ...TabsItems\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  \n  \n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;