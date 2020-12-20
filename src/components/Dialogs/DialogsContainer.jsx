import React from 'react';
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {reset} from 'redux-form';





const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}


const mapDispatchToProps= (dispatch) => {
    return {
        sendMessageClick: (newMessageElement) => {
            dispatch(sendMessageCreator(newMessageElement));
            dispatch(reset('dialogAddMessageForm'))
        }
    }
}


const AuthRedirectComponenet = withAuthRedirect(Dialogs)


export default compose(
    connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponenet))
