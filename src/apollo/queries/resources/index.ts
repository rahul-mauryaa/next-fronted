import { gql } from "@apollo/client";

import { IMAGE_FRAGMENT } from "@/apollo/fragments/image";
import { RESOURCES_ITEMS_FRAGMENT } from "@/apollo/fragments/resources-items";

export const FILTER_PAGE_QUERY = gql`
  query resourcesPage($slug: String) {
    pages(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          __typename
          shortName
          slug
          createdAt
          updatedAt
          contentSection {
            __typename
            ... on ComponentCardsResourcesSection {
              mainTitle
              groupNames {
                ...ResourcesItems
              }
              resourcesDateItems {
                date
                title
                subTitle
              }
            }
          }
        }
      }
    }
  }
  ${IMAGE_FRAGMENT}
  ${RESOURCES_ITEMS_FRAGMENT}
`;
