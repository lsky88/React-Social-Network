// Imports =================================================================
import css from './Dialogs.module.css'
import DialogsList from "./DialogsList/DialogsList";
import Messages from "./Messages/Messages";

// Dialogs Component ========================================================
const Dialogs = () => {
    return <section className={css.dialogs}>
        <DialogsList/>
        <Messages />
    </section>
}
export default Dialogs