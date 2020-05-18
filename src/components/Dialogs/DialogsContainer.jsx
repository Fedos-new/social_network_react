import React from 'react';
import {sendMessageCreator, updateNewMessageText} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState().dialogsPage;
                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                }

                let onNewMessageChange = (text) => {
                    store.dispatch(updateNewMessageText(text));
                }
                return <Dialogs newMessageText={state.newMessageText}
                                SendMessageClick={onSendMessageClick}
                                updateNewMessageText={onNewMessageChange}
                                dialogsPage={state}/>
            }
        }
        </StoreContext.Consumer>
    )
};

export default DialogsContainer;