import { gql } from '@apollo/client';

export const GET_SINGLE_NEWS = gql`
  query GetSingleNews($postId: ID!) {
    post(id: $postId) {
      id
      title
      body
    }
  }
`;

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

export const UPDATE_NEWS = gql`
  mutation UpdateNews($id: ID!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      id
      title
      body
    }
  }
`;
