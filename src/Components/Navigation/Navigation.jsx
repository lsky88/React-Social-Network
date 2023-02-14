// Imports =================================================================
import css from './Navigation.module.css'
import {NavLink} from "react-router-dom";

// Navigation Component ======================================================
const Navigation = () => {
    return <nav className={css.navigation}>
        <ul className={css.navList}>
            <li className={css.navItem}>
                <NavLink to="/profile" className={css.navLink}>Profile</NavLink>
            </li>
            <li className={css.navItem}>
                <a href="src/Components/Navigation/Navigation#">News</a>
            </li>
            <li className={css.navItem}>
                <NavLink to="/dialogs"
                         className={css.navLink}>Messages</NavLink>
            </li>
            <li className={css.navItem}>
                <a href="src/Components/Navigation/Navigation#">Music</a>
            </li>
            <li className={css.navItem}>
                <a href="src/Components/Navigation/Navigation#">Settings</a>
            </li>
        </ul>
    </nav>
}
export default Navigation