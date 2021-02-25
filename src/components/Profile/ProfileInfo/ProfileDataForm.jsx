import React from "react";
import StandardButton from "../../common/components/StandardButton/StandardButton";
import s from './ProfileInfo.module.css';
import style from "../../common/components/FormsControls/FormsControls.module.css"
import {createField, Input, Textarea} from "../../common/components/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <StandardButton primary={'green'}>Save</StandardButton>
        {error && <div className={style.formSummaryError}>
            {error}</div>}
        <div>
            <b>Name</b>: {createField('Name', Input, 'fullName', [])}
        </div>
        <div>
            <b>About me</b>: {createField('About Me', Input, 'aboutMe', [])}
        </div>
        <div>
            <b>Looking for a job</b>: {createField('', Input, 'lookingForAJob', [], {type: "checkbox"})}

        </div>
        <div>
            <b>My professional
                skills</b>: {createField('My professional skills', Textarea, 'lookingForAJobDescription', [])}

        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div className={s.contacts} key={key}>
                <b>{key}</b>{createField(key, Input, 'contacts.'+ key, [])}
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm;
