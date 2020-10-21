import React from 'react';
import {sendMessageCreator, updateNewMessageText} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";





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

let AuthRedirectComponenet = withAuthRedirect(Dialogs)



const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponenet);

export default DialogsContainer;