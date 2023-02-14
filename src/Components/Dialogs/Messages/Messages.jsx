// Imports =================================================================
import Message from "./Message/Message";
import css from "./Messages.module.css"
import NewMessage from "./NewMessage/NewMessage";

// Messages Component =========================================================
const Messages = () => {

    let messagesData = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Hi'},
    ]

    let messagesElements = messagesData.map(message => <Message id={message.id}
                                                                message={message.message}/>)

    return <section className={css.messages}>
        {messagesElements}
        <NewMessage/>
    </section>
}
export default Messages