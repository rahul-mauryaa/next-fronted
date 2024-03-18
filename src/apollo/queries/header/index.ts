import { gql } from "@apollo/client";

import { BUTTON_ITEMS_FRAGMENT } from "@/apollo/fragments/Button-items";
export const HEADER_QUERY = gql`
  query headerpage {
    headerSection {
      data {
        attributes {
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
  ${BUTTON_ITEMS_FRAGMENT}
`;
