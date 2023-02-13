// Imports =================================================================
import css from './Navigation.module.css'
import {NavLink} from "react-router-dom";

// Navigation Component ======================================================
const Navigation = () => {
    return <nav className={css.navigation}>
        <NavLink to="/profile">Profile</NavLink>
        <a href="src/Components/Navigation/Navigation#">News</a>
        <NavLink to="/dialogs">Messages</NavLink>
        <a href="src/Components/Navigation/Navigation#">Music</a>
        <a href="src/Components/Navigation/Navigation#">Settings</a>
    </nav>
}
export default Navigation