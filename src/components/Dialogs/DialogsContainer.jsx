import React from 'react';
import {sendMessageCreator, updateNewMessageText} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps= (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageText(text));
        },
        SendMessageClick: () => {
            dispatch(sendMessageCreator());
        },

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;