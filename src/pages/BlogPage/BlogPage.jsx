import React, { Suspense } from "react";
import styles from './BlogPage.module.css';
import { Link, useLoaderData, useSearchParams, Await, json } from "react-router-dom";
import BlogFilter from "../../components/BlogFilter/BlogFilter";
import ButtonLink from "../../components/UI/ButtonLink/ButtonLink";


function BlogPage() {
    const {posts} = useLoaderData();
    const [searchParams, setSearchParams] = useSearchParams();

    const postQuery = searchParams.get('post') ? searchParams.get('post') : '';
    const latest = searchParams.has('latest');
    const startsFrom = latest ? 80 : 1;

    return (
      <div className={styles.posts}>
        <h1>Our news</h1>

        <BlogFilter
          postQuery={postQuery}
          latest={latest}
          setSearchParams={setSearchParams}
        />

        <div className={styles.buttonLink}>
          <ButtonLink to="/posts/new">Add new post</ButtonLink>
        </div>

        <Suspense fallback={<h2>Loading...</h2>}>
          <Await resolve={posts}>
            {(resolvedPosts) => (
              <>
                {resolvedPosts.filter(
                    (post) =>
                      post.title.includes(postQuery) && post.id >= startsFrom
                  )
                  .map((post) => (
                    <Link key={post.id} to={`/posts/${post.id}`}>
                      <li>{post.title}</li>
                    </Link>
                  ))}
              </>
            )}
          </Await>
        </Suspense>
      </div>
    );
}

async function getPosts() {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts');

  // if (!result.ok) {
  //   throw new Response('', {status: result.status, statusText: 'Not found'});
  // }

  return result.json();
}

const blogLoader = async () => {
  const posts = await getPosts();

  if (!posts.length) {
    throw json({message: 'Not found!', reason: 'Wrong url!'}, {status: 404});
  }

  return ({
    posts: posts
  });
}

export {BlogPage, blogLoader};