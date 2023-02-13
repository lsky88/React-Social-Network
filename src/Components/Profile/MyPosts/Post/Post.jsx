// Imports =================================================================
import css from './Post.module.css'

// Post Component ============================================================
const Post = (props) => {
    return <section className={css.post}>
        <img src="" alt=""/>
        <p>{props.message}</p>
        <span>Like {props.likesCount}</span>
    </section>
}

export default Post