import { gql } from "@apollo/client";

import { IMAGE_FRAGMENT } from "@/apollo/fragments/image";
import { SLIDER_ITEMS_FRAGMENT } from "@/apollo/fragments/section-items";
import { TABS_ITEMS_FRAGMENT } from "@/apollo/fragments/tabs-items";
import { BUTTON_ITEMS_FRAGMENT } from "@/apollo/fragments/Button-items";
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
                ...SliderItems
              }
            }
            ... on ComponentCardsTabSection {
              id
              tabsItems {
                ...TabsItems
              }
            }
            ... on ComponentCardsHeaderSection {
              id
              title
              description
              offerButton {
                ...ButtonItems
              }
              toggle
            }
          }
        }
      }
    }
  }
  ${IMAGE_FRAGMENT}
  ${SLIDER_ITEMS_FRAGMENT}
  ${TABS_ITEMS_FRAGMENT}
  ${BUTTON_ITEMS_FRAGMENT}
`;
