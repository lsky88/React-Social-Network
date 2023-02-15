// Imports =================================================================
import css from './MyPosts.module.css'
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";


// My Posts Component ========================================================
const MyPosts = (props) => {
    let postsElements =
        props.postsData.map(post => <Post id={post.id}
                                          message={post.message}
                                          likesCount={post.likesCount}/>)

    return <section className={css.myPosts}>
        <h2>My Posts</h2>
        {postsElements}
        <NewPost/>
    </section>
}

export default MyPosts