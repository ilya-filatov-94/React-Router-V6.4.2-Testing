import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { redirect, useNavigate, useNavigation } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import NewPost from "../../components/NewPost/NewPost";


function CreatePost() {
    const {signOut} = useAuth();
    const navigate = useNavigate();
    const navigation = useNavigation();

    return (
        <div>
            <h1>Create a post</h1>
            <NewPost submitting={navigation.state === 'submitting'}/>
            <Button onClick={() => signOut(() => navigate('/', {replace: true}))}>Log Out</Button>
        </div>
    );
}

const createPost = async ({title, body, userId}) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, body, userId })
    })
    const newPost = await res.json()

    return newPost
}

const createPostAction = async ({request}) => {
    const formData = await request.formData();
    const newPost = {
        title: formData.get('title'),
        body: formData.get('body'),
        userId: formData.get('userId')
    }
    const post = await createPost(newPost)

    return redirect('/posts/' + post.id)
}

export {CreatePost, createPostAction};