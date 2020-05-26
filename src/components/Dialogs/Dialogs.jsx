import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageText} from "../../redux/dialogs-reducer";



const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key = {d.id} id={d.id} img={d.image}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageElement = React.createRef();


    let onSendMessageClick = () => {
        props.SendMessageClick();
    }

    let onNewMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
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
                      onChange={onNewMessageChange}
                      value={state.newMessageText}
            > </textarea>
            <button onClick={onSendMessageClick}>SEND message</button>
        </div>
    )
};

export default Dialogs;