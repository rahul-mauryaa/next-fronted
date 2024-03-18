import { gql } from "@apollo/client";

import { IMAGE_FRAGMENT } from "@/apollo/fragments/image";

export const TABS_ITEMS_FRAGMENT = gql`
  fragment TabsItems on ComponentGeneralBlogItems {
    title
    description
    artical {
      data {
        attributes {
          mainTitle
          details {
            title
            description
          }
          image {
            ...Image
          }
          slug
        }
      }
    }
  }
  ${IMAGE_FRAGMENT}
`;
