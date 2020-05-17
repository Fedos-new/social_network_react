import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageText} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";



const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (text) => {
        props.store.dispatch(updateNewMessageText(text));
    }

    return (
        <Dialogs  newMessageText={props.newMessageText}
                  SendMessageClick={onSendMessageClick}
                  updateNewMessageText={onNewMessageChange}
                  dialogsPage={state}/>
    )
};

export default DialogsContainer;