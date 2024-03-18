import { gql } from "@apollo/client";

import { IMAGE_FRAGMENT } from "@/apollo/fragments/image";
import { SECTION_ITEMS_FRAGMENT } from "@/apollo/fragments/section-items";
import { TABS_ITEMS_FRAGMENT } from "@/apollo/fragments/tabs-items";
import { TESTIMONIALS_ITEMS_FRAGMENT } from "@/apollo/fragments/tesimonials-items";

export const FILTER_PAGE_QUERY = gql`
  query homePage($slug: String) {
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
            ... on ComponentCardsHeroSection {
              id
              sliderItems {
                ...SectionItems
              }
            }
            ... on ComponentCardsTabSection {
              id
              Head {
                title
                description
                commonimagetoggle
                commonImage {
                  data {
                    attributes {
                      name
                      url
                      formats
                      createdAt
                      updatedAt
                    }
                  }
                }
              }
              tabsItems {
                ...TabsItems
              }
            }
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
  ${IMAGE_FRAGMENT}
  ${SECTION_ITEMS_FRAGMENT}
  ${TABS_ITEMS_FRAGMENT}
  ${TESTIMONIALS_ITEMS_FRAGMENT}
`;
