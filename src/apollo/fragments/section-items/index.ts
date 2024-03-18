import { gql } from "@apollo/client";

import { IMAGE_FRAGMENT } from "@/apollo/fragments/image";

export const SLIDER_ITEMS_FRAGMENT = gql`
  fragment SliderItems on ComponentGeneralSectionItems {
    title
    subtitle
    description
    image {
      ...Image
    }
  }
  ${IMAGE_FRAGMENT}
`;
