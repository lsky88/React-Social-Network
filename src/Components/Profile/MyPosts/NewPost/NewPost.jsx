// Imports =================================================================
import css from './NewPost.module.css'

// New Post Component ======================================================
const NewPost = () => {
    return <section className={css.newPost}>
        <textarea name="" id=""></textarea>
        <button>Post it</button>
    </section>
}

export default NewPost