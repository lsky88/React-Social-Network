// Imports =================================================================
import React from 'react';
import css from './NewMessage.module.css'

// New Message Component ======================================================
const NewMessage = () => {

    let newMessageElement = React.createRef()

    let onSendMessage = () => {
        let createMessage = newMessageElement.current.value
        alert(createMessage)
    }

    return <section className={css.newMessage}>
        <textarea name="" id="" ref={newMessageElement}></textarea>
        <button onClick={onSendMessage}>Send</button>
    </section>
}

export default NewMessage