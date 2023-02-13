import css from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <main className={css.profile}>
        Ava + Description
        <MyPosts/>
    </main>
}

export default Profile