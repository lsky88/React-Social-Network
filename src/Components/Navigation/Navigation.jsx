import css from './Navigation.module.css'

const Navigation = () => {
    return <nav className={css.navigation}>
        <a href="src/Components/Navigation/Navigation#">Profile</a>
        <a href="src/Components/Navigation/Navigation#">News</a>
        <a href="src/Components/Navigation/Navigation#">Messages</a>
        <a href="src/Components/Navigation/Navigation#">Music</a>
        <a href="src/Components/Navigation/Navigation#">Settings</a>
    </nav>
}
export default Navigation