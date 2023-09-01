import React, { Suspense } from "react";
import styles from './SinglePage.module.css';
import { Await, useAsyncValue, useLoaderData, useNavigate, defer } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import ButtonLink from "../../components/UI/ButtonLink/ButtonLink";


const Post = () => {
  const post = useAsyncValue();
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}

const Comments = () => {
  const comments = useAsyncValue();
  return (
    <div>
      <h2>Comments</h2>
      {comments.map((comment) => (
        <div className={styles.comment} key={comment.email}>
          <h3>{comment.email}</h3>
          <h4>{comment.name}</h4>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}

function SinglePage() {

    const {post, id, comments} = useLoaderData();
    const naigate = useNavigate();
    const goBack = () => naigate(-1);

    return (
      <div className={styles.wrapper_post}>
        <Suspense fallback={<h2>Post is loading...</h2>}>
          <Await resolve={post}>
            <Post />
          </Await>
        </Suspense>

        <Suspense fallback={<h2>Comments is loading...</h2>}>
          <Await resolve={comments}>
            <Comments />
          </Await>
        </Suspense>

        <div className={styles.wrapperButton}>
          <div><Button onClick={goBack}>Back</Button></div>
          <div className={styles.editButton}><ButtonLink to={`/posts/${id}/edit`}>Edit this post</ButtonLink></div>
        </div>
      </div>
    );
}

async function getPostById(id) {
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return result.json();
}

async function getCommentsByPost(id) {
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  return result.json();
}

const postLoader = async ({params}) => {
  const id = params.id;
  return defer ({post: await getPostById(id), id, comments: getCommentsByPost(id)});
}

export {SinglePage, postLoader};