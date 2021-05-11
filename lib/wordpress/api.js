// Grab the first 20 posts
export const ALL_POSTS = `query AllPosts {
  posts(first: 20, where: {orderby: {field: DATE, order: DESC}}) {
    nodes {
      date
      id
      slug
      title
      excerpt(format: RAW)
    }
  }
}`;

// Get all the slugs for static paths/static generation

// Post by a slug, so we can display to the user