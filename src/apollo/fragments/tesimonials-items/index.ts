import { gql } from "@apollo/client";

import { IMAGE_FRAGMENT } from "@/apollo/fragments/image";

export const TESTIMONIALS_ITEMS_FRAGMENT = gql`
  fragment TestimonialsItems on ComponentGeneralTestimonialsItems {
    title
    description
    name
    position
    image {
      ...Image
    }
  }
  ${IMAGE_FRAGMENT}
`;
