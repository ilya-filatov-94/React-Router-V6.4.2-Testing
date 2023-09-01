import React from "react";
import { Form } from "react-router-dom";


function UpdatePost({id, title, body, userId, submitting}) {

    return (
        <Form action={`/posts/${id}/edit`} method='post'>
            <label htmlFor="TitleNewPost">
                <span>Title </span>
                <input type="text" name="title" id="TitleNewPost" defaultValue={title}/>
            </label>
            <label htmlFor="BodyNewPost">
                <span>Body </span>
                <input type="text" name="body" id="BodyNewPost" defaultValue={body}/>
            </label>
            <input type="hidden" name="userId" value={userId} />
            <input type="hidden" name="id" value={id} />
            <input type="submit" value="Update post" disabled={submitting}/>
        </Form>
    );
}

export default UpdatePost;