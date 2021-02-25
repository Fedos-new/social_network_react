import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/components/Preloader/Preloader";
import ProfileStatusWithHooks from '../ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png'


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    const getArray = () => profile.contacts.map(el => profile.contacts[el])
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
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


                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                    <div>
                    {`Name : ` + profile.fullName}
                    </div>
                    <div>
                    {`About me: ` + profile.aboutMe}
                    </div>
                    <div>
                    {profile.lookingForAJob === true ? "Looking for a job" : "Not looking for a job"}
                    </div>
                    <div>
                    {"Description of the desired job:  " + {getArray}}
                    </div>

                    </div>
                    </div>
                    )
                    };

                    export default ProfileInfo;
