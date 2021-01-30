import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/components/Preloader/Preloader";
import ProfileStatusWithHooks from '../ProfileStatusWithHooks';


const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

    const getArray = () => profile.contacts.map(el => profile.contacts[el])

    return (

        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large}/>

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
