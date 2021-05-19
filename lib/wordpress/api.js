// Grab the first 20 posts
export const ALL_POSTS = `query AllPosts {
  posts(first: 20, where: {orderby: {field: DATE, order: DESC}}) {
    nodes {
      date
      id
      slug
      title
      featuredImage {
        node {
          id
          altText
          sourceUrl(size: LARGE)
        }
      }
      excerpt(format: RAW)
    }
  }
}`;

// Get all the slugs for static paths/static generation
export const  GET_ALL_POSTS_WITH_SLUG = `
{
  posts(first: 10000){
    nodes{
      slug
    }
  }
}

`
// Post by a slug, so we can display to the user
export const POST_BY_SLUG = `query PostBySlug ($id: ID!, $idType:PostIdType) {
  post(id: $id, idType: $idType) {
    slug
    title
    date
    content
    featuredImage {
      node {
        sourceUrl
      }
    }
  }
}
`