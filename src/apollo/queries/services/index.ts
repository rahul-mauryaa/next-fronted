import { gql } from "@apollo/client";
import { TABS_ITEMS_FRAGMENT } from "@/apollo/fragments/tabs-items";
import { TESTIMONIALS_ITEMS_FRAGMENT } from "@/apollo/fragments/tesimonials-items";

export const FILTER_PAGE_QUERY = gql`
  query servicesPage($slug: String) {
    pages(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          shortName
          slug
          createdAt
          updatedAt
          publishedAt
          contentSection {
            __typename
            ... on ComponentCardsTestimonialsSection {
              id
              testimonialsitems {
                ...TestimonialsItems
              }
            }
          }
        }
      }
    }
  }

  ${TABS_ITEMS_FRAGMENT}
  ${TESTIMONIALS_ITEMS_FRAGMENT}
`;
