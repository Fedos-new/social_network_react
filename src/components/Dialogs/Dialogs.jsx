import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageText} from "../../redux/dialogs-reducer";



const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.image}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);
    let newMessageElement = React.createRef();


    let sendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageText(text));
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
            <textarea ref={newMessageElement}
                      placeholder='Enter your message'
                      onChange={onMessageChange}
                      value={state.newMessageText}
            > </textarea>
            <button onClick={sendMessageClick}>SEND message</button>
        </div>
    )
};

export default Dialogs;