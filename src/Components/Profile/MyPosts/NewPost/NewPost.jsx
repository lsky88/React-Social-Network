// Imports =================================================================
import React from 'react';
import css from './NewPost.module.css'

// New Post Component ======================================================
const NewPost = () => {

    let newPostElement = React.createRef()

    let onAddPost = () => {
        let text = newPostElement.current.value
        alert(text)
    }

    return <section className={css.newPost}>
        <textarea name="" id="" ref={newPostElement}></textarea>
        <button onClick={onAddPost}>Add Post
        </button>
    </section>
}

export default NewPost