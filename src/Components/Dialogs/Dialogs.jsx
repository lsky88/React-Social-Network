// Imports =================================================================
import css from './Dialogs.module.css'
import DialogsList from "./DialogsList/DialogsList";
import Messages from "./Messages/Messages";

// Dialogs Component ========================================================
const Dialogs = (props) => {
    return <section className={css.dialogs}>
        <DialogsList dialogsListData={props.dialogs.dialogsListData}/>
        <Messages messagesData={props.dialogs.messagesData}/>
    </section>
}
export default Dialogs