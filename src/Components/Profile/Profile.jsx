// Imports =================================================================
import css from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

// Profile Component =========================================================
const Profile = () => {
    return <section className={css.profile}>
        <ProfileInfo/>
        <MyPosts/>
    </section>
}

export default Profile