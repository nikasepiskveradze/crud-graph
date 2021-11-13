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

export const CREATE_NEWS = gql`
  mutation CreateNews($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`;
