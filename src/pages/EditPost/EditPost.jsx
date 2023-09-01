import React from "react";
import styles from './EditPost.module.css';
import { useActionData, useLoaderData, useNavigation, /*useParams,*/} from "react-router-dom";
import UpdatePost from "../../components/UpdatePost/UpdatePost";


function EditPost() {
    // const {id} = useParams();
    const data = useActionData();
    const {post, id} = useLoaderData();
    const navigation = useNavigation(); //Для информации о статусе отправки запроса

    return (
      <div>
        {data?.message && 
            <div className={styles.messageUpdate}>
                {data.message}
            </div>
        }
        <h1>Edit post {id}</h1>
        <UpdatePost 
            {...post} 
            submitting={navigation.state === "submitting"}
        />
      </div>
    );
}

const updatePost = async (post) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.get('id')}`, {
        method: 'PUT',
        body: post
    });
    return res.json();
}

const updatePostAction = async ({request}) => {
    const formData = await request.formData();

    if (!formData.get('title') || !formData.get('body')) {
        return { message: 'All fields is requred!'};
    }

    const updatedPost = await updatePost(formData);

    return { message: `Post ${updatedPost.id} was successfully updated` };
}

export {EditPost, updatePostAction};