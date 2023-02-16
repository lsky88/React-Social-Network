// Imports =================================================================
import css from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

// Profile Component =========================================================
const Profile = (props) => {
    return <section className={css.profile}>
        <ProfileInfo/>
        <MyPosts postsData={props.profile.postsData}/>
    </section>
}

export default Profile