import { gql } from 'graphql-request';

export const GET_ALL_ARTICLES = gql`
  query GetAllArticles {
    articles {
      id
      title
      slug
      excerpt
      content
      coverpic {
        fileName
        url
        width
        height
      }
      updatedAt
    }
  }
`;

export const GET_SINGLE_ARTICLE = gql`
  query GetSingleArticle($slug: String!) {
    article(where: { slug: $slug }) {
      id
      title
      slug
      excerpt
      content
      coverpic {
        fileName
        url
        width
        height
      }
      updatedAt
    }
  }
`;
