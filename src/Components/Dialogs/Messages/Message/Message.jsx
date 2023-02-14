// Imports =================================================================
import css from './Message.module.css'

// Message Component ==========================================================
const Message = (props) => {
    return <div className={css.message} id={props.id}>
        <img src="" alt=""/>
        <p>{props.message}</p>
    </div>
}
export default Message