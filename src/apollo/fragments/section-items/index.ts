import { gql } from "@apollo/client";

import { IMAGE_FRAGMENT } from "@/apollo/fragments/image";

export const SECTION_ITEMS_FRAGMENT = gql`
  fragment SectionItems on ComponentGeneralSectionItems {
    title
    subtitle
    description
    image {
      ...Image
    }
  }
  ${IMAGE_FRAGMENT}
`;
