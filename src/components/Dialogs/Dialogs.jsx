import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validator/valodators";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key = {d.id} id={d.id} img={d.image}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);



    let addNewMessage = (value) => {
        props.sendMessageClick(value.newMessageElement)

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
                <AddMessageReduxForm onSubmit={addNewMessage}/>
        </div>
    )
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name="newMessageElement"
                       placeholder="newMessageElement"
                       validate={[required]}/>
            </div>
            <div>
                <button>SEND message</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form:'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;