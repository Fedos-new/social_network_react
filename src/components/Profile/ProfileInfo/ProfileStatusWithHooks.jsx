import React, {useEffect, useState} from 'react';
import s from "../../Login/Login.module.css";
import style from "./ProfileInfo.module.css"


const ProfileStatusWithHooks = (props) => {


    const [editMode, SetEditMode] = useState(false)
    const [status, EditStatus] = useState(props.status)

    const activateEditMode = () => {
        SetEditMode(true)
    }
    const deactivateEditMode = () => {
        SetEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        SetEditMode(true)
        EditStatus(e.currentTarget.value)
    }

    useEffect(() => {
        EditStatus(props.status)
    }, [props.status])

    return (
        <>
            {!editMode
                ? <div>
                    <b>Status</b>: <span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
                </div>
                : <div>
                    <input autoFocus={true}
                           onBlur={deactivateEditMode}
                           onChange={onStatusChange}
                           value={status}
                           className={`${s.inputLogin} ${style.inputStatus}` }
                    />
                </div>
            }
        </>
    )
}


export default ProfileStatusWithHooks
