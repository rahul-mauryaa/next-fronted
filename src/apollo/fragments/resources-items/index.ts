import { gql } from "@apollo/client";

import { IMAGE_FRAGMENT } from "@/apollo/fragments/image";

export const RESOURCES_ITEMS_FRAGMENT = gql`
  fragment ResourcesItems on ComponentGeneralResourceItems {
    groupName
    selectresource {
      data {
        attributes {
          title
          image {
            ...Image
          }
          description
          file {
            ...Image
          }
          readMoreLink
          fileToggle
          readMoreToggle
        }
      }
    }
  }
  ${IMAGE_FRAGMENT}
`;
