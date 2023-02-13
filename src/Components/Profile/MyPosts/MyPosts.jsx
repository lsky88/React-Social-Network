import css from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return <section className={css.myPosts}>
        My Posts
        New Post
        <Post message={"hi"} likesCount={1}/>
        <Post message={"hello"} likesCount={2}/>
        <Post message={"what's up"} likesCount={3}/>
    </section>
}

export default MyPosts