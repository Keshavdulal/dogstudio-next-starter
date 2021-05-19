import fetcher from '../../lib/fetcher';
import { GET_ALL_POSTS_WITH_SLUG, POST_BY_SLUG } from '../../lib/wordpress/api';

import { useRouter } from 'next/router';

const post = ({ postData }) => {
  const blogPost = postData.data.post;
  const router = useRouter;

  if (!router.isFallback && !blogPost?.slug) {
    return <ErrorPage status={404} />;
  }

  return (
    <div>
      {router.isFallback ? (
        <div>Loading...........</div>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
      )}
    </div>
  );
};

export default post;

// get all posts and make static paths for each one during the build time
export async function getStaticPaths() {
  const response = await fetcher(GET_ALL_POSTS_WITH_SLUG);
  const allPosts = await response.data.posts.nodes;

  return {
    paths: allPosts.map((post) => `/post/${post.slug}`) || [],
    fallback: false
  };
}

//
export async function getStaticProps({ params }) {
  const variables = {
    id: params.slug,
    idType: 'SLUG'
  };

  const data = await fetcher(POST_BY_SLUG, { variables });
  return {
    props: {
      postData: data
    }
  };
}
