import React from 'react';
import s from './Dialogs.module.css';
import s1 from '../Profile/MyPosts/MyPosts.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/components/FormsControls/FormsControls";
import comStyle from "../common/style/Container.module.css";
import StandardButton from "../common/components/StandartButton/StandartButton";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key = {d.id} id={d.id} img={d.image}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);



    let addNewMessage = (value) => {
        props.sendMessageClick(value.newMessageElement)

    }

    return (
        <div className={comStyle.wrapContainer}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
                <AddMessageReduxForm onSubmit={addNewMessage}/>
        </div>
    )
};

const AddMessageForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className={s.fromSendMessage}>
            <div>
                <Field component={Textarea}
                       name="newMessageElement"
                       placeholder="Your message"
                       className={s1.textarea}
                       />
            </div>
            <div>
                <StandardButton>Send message</StandardButton>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form:'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;
