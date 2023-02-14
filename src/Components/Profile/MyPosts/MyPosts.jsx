// Imports =================================================================
import css from './MyPosts.module.css'
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";


// My Posts Component ========================================================
const MyPosts = () => {
    let postsData = [
        {id: 1, message: 'Hello', likesCount: 1},
        {id: 2, message: 'Yo', likesCount: 7},
        {id: 3, message: 'Hi', likesCount: 8},
    ]

    let postsElements = postsData.map(post => <Post id={post.id}
                                                    message={post.message}
                                                    likesCount={post.likesCount}/>)

    return <section className={css.myPosts}>
        <h2>My Posts</h2>
        {postsElements}
        <NewPost/>
    </section>
}

export default MyPosts