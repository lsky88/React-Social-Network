// Imports =================================================================
import Message from "./Message/Message";
import css from "./Messages.module.css"
import NewMessage from "./NewMessage/NewMessage";

// Messages Component =========================================================
const Messages = (props) => {

    let messagesElements = props.messagesData.map(message => <Message
        id={message.id}
        message={message.message}/>)

    return <section className={css.messages}>
        {messagesElements}
        <NewMessage/>
    </section>
}
export default Messages