// Imports =================================================================
import css from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

// Profile Component =========================================================
const Profile = () => {
    return <section className={css.profile}>
        Ava + Description
        <MyPosts/>
    </section>
}

export default Profile