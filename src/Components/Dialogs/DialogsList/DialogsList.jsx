// Imports =================================================================
import css from './DialogsList.module.css'
import DialogItem from "./DialogItem/DialogItem";

// Dialogs List Component ====================================================
const DialogsList = () => {
  return <section className={css.dialogsList}>
    <DialogItem name={'John'} id={`1`}/>
    <DialogItem name={'Igor'} id={`2`}/>
    <DialogItem name={'Ann'} id={`3`}/>
  </section>
}
export  default DialogsList