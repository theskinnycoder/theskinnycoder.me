const gql = String.raw;

export const GET_ALL_ARTICLES = gql`
  query GetAllArticles {
    articles {
      title
      slug
      excerpt
      categories {
        name
        color {
          hex
        }
      }
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

export const GET_ALL_ARTICLES_BY_CATEGORY = gql`
  query GetAllArticlesByCategory($name: String!) {
    category(where: { name: $name }) {
      name
      color {
        hex
      }
      articles {
        title
        slug
        excerpt
        categories {
          name
          color {
            hex
          }
        }
        coverpic {
          fileName
          url
          width
          height
        }
        updatedAt
      }
    }
  }
`;

export const GET_ALL_CATEGORIES = gql`
  query GetAllCategories {
    categories {
      name
      color {
        hex
      }
    }
  }
`;

export const GET_SINGLE_ARTICLE = gql`
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
      categories {
        name
        color {
          hex
        }
      }
      updatedAt
    }
  }
`;
