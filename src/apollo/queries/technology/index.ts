import { gql } from "@apollo/client";
import { SECTION_ITEMS_FRAGMENT } from "@/apollo/fragments/section-items";
import { TABS_ITEMS_FRAGMENT } from "@/apollo/fragments/tabs-items";
export const FILTER_PAGE_QUERY = gql`
  query technologyPage($slug: String) {
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
            ... on ComponentCardsTechnologySection {
              id
              head {
                title
                description
              }
              section {
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
          }
        }
      }
    }
  }
  ${SECTION_ITEMS_FRAGMENT}
  ${TABS_ITEMS_FRAGMENT}
`;
