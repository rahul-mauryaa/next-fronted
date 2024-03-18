import { gql } from "@apollo/client";

export const FILTER_PAGE_QUERY = gql`
  query servicesPage($slug: String) {
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
            ... on ComponentCardsTestimonialsSection1 {
              id
              testimonialsitems {
                title
                description
                image {
                  data {
                    attributes {
                      name
                      url
                      formats
                      createdAt
                      updatedAt
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
