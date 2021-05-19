// import React from 'react';
import fetcher from '../lib/fetcher';
import { ALL_POSTS } from '../lib/wordpress/api';
import Link from 'next/link';

// React Components
import Navigation from '../src/components/Navigation';

// Styles
import Styles from './index.module.scss';

const blog = ({ allPosts }) => {
  const posts = allPosts;

  return (
    <div className={Styles['page']}>
      <main className='main'>
        <Navigation />
        <div className='grid'>
          {posts.map((post) => {
            return (
              <div className='card' key={post.slug}>
                <h3>{post.title}</h3>
                <img
                  src={post?.featuredImage?.node?.sourceUrl}
                  alt='featured-image'
                />
                <div>{post.excertp}</div>
                <p>>{post.date}</p>
                <Link href={`/post/${post.slug}`}>
                  <a>Read more</a>
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default blog;

export async function getStaticProps() {
  const response = await fetcher(ALL_POSTS);
  console.log('***', response);
  const allPosts = response?.data?.posts?.nodes;

  return {
    props: { allPosts },
    revalidate: 1 // revalidate check for new posts once a fresh user visits the page
  };
}
