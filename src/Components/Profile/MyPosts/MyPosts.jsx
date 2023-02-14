// Imports =================================================================
import css from './MyPosts.module.css'
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

// My Posts Component ========================================================
const MyPosts = () => {
    return <section className={css.myPosts}>
        <h2>My Posts</h2>
        <Post message={`Lorem ipsum dolor sit amet.`} likesCount={1}/>
        <Post message={`Lorem ipsum dolor.`} likesCount={2}/>
        <Post message={`Lorem ipsum dolor sit amet, consectetur adipisicing elit.`} likesCount={3}/>
        <NewPost/>
    </section>
}

export default MyPosts