// Imports =================================================================
import css from './DialogsList.module.css'
import DialogItem from "./DialogItem/DialogItem";
import {Route} from "react-router-dom";


// Dialogs List Component ====================================================
const DialogsList = () => {

    let dialogsListData = [
        {name: 'John', id: 1},
        {name: 'Ivan', id: 2},
        {name: 'Ann', id: 3},
    ]

    let dialogsListElements = dialogsListData.map(dialog => <DialogItem
        name={dialog.name} id={dialog.id}/>)

    return <section className={css.dialogsList}>
            {dialogsListElements}
    </section>
}
export default DialogsList