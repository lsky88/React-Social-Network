import css from './Navigation.module.css'

const Navigation = () => {
    return <nav className={css.navigation}>
        <a href="#">Profile</a>
        <a href="#">News</a>
        <a href="#">Messages</a>
        <a href="#">Music</a>
        <a href="#">Settings</a>
    </nav>
}
export default Navigation