// Imports =================================================================
import css from './DialogsList.module.css'
import DialogItem from "./DialogItem/DialogItem";

// Dialogs List Component ====================================================
const DialogsList = () => {
  return <section className={css.dialogsList}>
    <DialogItem name={'John'}/>
    <DialogItem name={'Igor'}/>
  </section>
}
export  default DialogsList