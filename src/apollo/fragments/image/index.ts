import { gql } from "@apollo/client";

export const IMAGE_FRAGMENT = gql`
  fragment Image on UploadFileEntityResponse {
    data {
      id
      attributes {
        name
        url
        formats
        createdAt
        updatedAt
      }
    }
  }
`;
