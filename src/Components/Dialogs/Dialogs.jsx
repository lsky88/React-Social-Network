// Imports =================================================================
import css from './Dialogs.module.css'
import DialogsList from "./DialogsList/DialogsList";
import Messages from "./Messages/Messages";

// Dialogs Component ========================================================
const Dialogs = (props) => {
    return <section className={css.dialogs}>
        <DialogsList dialogsListData={props.dialogsListData}/>
        <Messages messagesData={props.messagesData}/>
    </section>
}
export default Dialogs