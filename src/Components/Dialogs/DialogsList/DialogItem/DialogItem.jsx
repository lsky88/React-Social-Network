// Imports =================================================================
import css from './DialogItem.module.css'

// Dialog Item Component ======================================================
const DialogItem = (props) => {
  return <div className={css.dialogItem}>
      <img src="" alt=""/>
      <p>{props.name}</p>
  </div>
}
export default DialogItem;