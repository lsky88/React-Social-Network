// Imports =================================================================
import css from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

// Dialog Item Component ======================================================
const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`
    
  return <NavLink to={path} className={css.dialogItem} id={props.id}>
      <img src="" alt=""/>
      <p>{props.name}</p>
  </NavLink>
}
export default DialogItem;