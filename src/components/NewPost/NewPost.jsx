import React from "react";
import styles from './NewPost.module.css';
import { Form } from "react-router-dom";


function NewPost({submitting}) {

    return (
        <Form action="/posts/new" method='post'>
            <label htmlFor="TitleNewPost">
                <span>Title </span>
                <input type="text" name="title" id="TitleNewPost"/>
            </label>
            <label htmlFor="BodyNewPost">
                <span>Body </span>
                <input type="text" name="body" id="BodyNewPost"/>
            </label>
            <input type="hidden" name="userId" value="1" className={styles.input}/>
            <input type="submit" value="Add post" disabled={submitting}/>
        </Form>
    );
}

export default NewPost;