import { gql } from '@apollo/client';

export const GET_ALL_NEWS = gql`
  query GetAllNews {
    posts {
      data {
        id
        title
        body
      }
    }
  }
`;
