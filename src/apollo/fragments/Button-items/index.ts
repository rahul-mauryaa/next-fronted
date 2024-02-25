import { gql } from "@apollo/client";

export const BUTTON_ITEMS_FRAGMENT = gql`
  fragment ButtonItems on ComponentGeneralButton {
    btnText
    redirectTo
  }
`;
