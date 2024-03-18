import { gql } from "@apollo/client";

import { IMAGE_FRAGMENT } from "@/apollo/fragments/image";
export const FOOTER_QUERY = gql`
  query footerpage {
    footerSection {
      data {
        attributes {
          description
          socialItems {
            image {
              ...Image
            }
            link
          }
        }
      }
    }
  }
  ${IMAGE_FRAGMENT}
`;
