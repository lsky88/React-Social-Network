// Imports =================================================================
import React from 'react';
import css from './MyPosts.module.css'
import Post from "./Post/Post";

// My Posts Component ========================================================
const MyPosts = (props) => {
    let postsElements =
        props.postsData.map(post => <Post id={post.id}
                                          message={post.message}
                                          likesCount={post.likesCount}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return <section className={css.myPosts}>
        <h2>My Posts</h2>
        {postsElements}
        <section className={css.newPost}>
            <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
            <button onClick={addPost}>Add Post</button>
        </section>
    </section>
}

export default MyPosts