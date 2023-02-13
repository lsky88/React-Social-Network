// Imports =================================================================
import css from './NewMessage.module.css'
// New Message Component ======================================================
const NewMessage = () => {
  return <section className={css.newMessage}>
      <textarea name="" id=""></textarea>
      <button>Send</button>
  </section>
}

export default NewMessage