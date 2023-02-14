// Imports =================================================================
import css from './Post.module.css'

// Post Component ============================================================
const Post = (props) => {
    return <section className={css.post} id={props.id}>
        <img src="" alt=""/>
        <p>{props.message}</p>
        <span>♥{props.likesCount}</span>
    </section>
}

export default Post