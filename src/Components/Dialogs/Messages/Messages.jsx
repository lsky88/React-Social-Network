// Imports =================================================================
import Message from "./Message/Message";
import css from "./Messages.module.css"
import NewMessage from "./NewMessage/NewMessage";

// Messages Component =========================================================
const Messages = () => {
  return <section className={css.messages}>
      <Message message={`Hi`} />
      <Message message={`Hello`}/>
      <Message message={`Yo`}/>
      <NewMessage/>
  </section>
}
export default Messages