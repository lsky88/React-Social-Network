// Imports =================================================================
import css from './DialogsList.module.css'
import DialogItem from "./DialogItem/DialogItem";

// Dialogs List Component ====================================================
const DialogsList = (props) => {
    let dialogsListElements = props.dialogsListData.map(dialog => <DialogItem
        name={dialog.name} id={dialog.id}/>)

    return <section className={css.dialogsList}>
        {dialogsListElements}
    </section>
}
export default DialogsList