export const GET_ALL_ARTICLES = `
  query GetAllArticles {
    articles {
      title
      slug
      excerpt
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

export const GET_SINGLE_ARTICLE = `
  query GetSingleArticle($slug: String!) {
    article(where: { slug: $slug }) {
      title
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
