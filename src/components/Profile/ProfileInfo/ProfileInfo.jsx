import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/components/Preloader/Preloader";
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png'
import StandardButton from "../../common/components/StandardButton/StandardButton";
import ProfileDataFormReduxForm from "./ProfileDataForm";


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
    }

    return (

        <div>
            <div className={s.descriptionBlock}>
                <img alt={'avatar'} src={profile.photos.large || userPhoto}/>
                {
                    !isOwner && <div>
                        <label className={s.btnFile}>Update photo
                            <input type={"file"} onChange={onMainPhotoSelected}/>
                        </label>
                    </div>
                }

                {editMode
                    ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {
                        setEditMode(true)
                    }}/>
                }

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {!isOwner && <StandardButton primary={'green'} onClick={goToEditMode}>Edit</StandardButton>}
        <div>
            <b>Name</b>: {profile.fullName}
        </div>
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob === true ? "Yes" : "No"}
        </div>
        <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>

}


const Contact = ({contactTitle, contactValue}) => {

    return <div className={s.contacts}><b>{contactTitle}</b>: {contactValue}

    </div>

}

export default ProfileInfo;
