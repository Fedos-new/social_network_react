import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={'/dialogs/' + props.id} activeClassName={s.activeLink}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name='Dimych' id='1'/>
                    <DialogItem name='Roman' id='2'/>
                    <DialogItem name='Leha' id='3'/>
                    <DialogItem name='Ivan' id='4'/>
                    <DialogItem name='Sveta' id='5'/>
                </div>
                <div className={s.messages}>
                    <Message message='Hi!'/>
                    <Message message='How are you?'/>
                    <Message message='Yo!'/>
                    <Message message='WTF?:-)'/>
                    <Message message=':-)'/>
                </div>
            </div>
        </div>

    )

};

export default Dialogs;