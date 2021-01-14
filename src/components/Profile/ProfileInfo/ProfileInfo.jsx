import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
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
                    {`Имя : ` + profile.fullName}
                </div>
                <div>
                    {`Обо мне: ` + profile.aboutMe}
                </div>
                <div>
                    {profile.lookingForAJob === true ? "Ищу работу" : "Не ищу работу"}
                </div>
                <div>
                    {"Описание желаемой работы:  " + {getArray}}
                </div>


            </div>
        </div>
    )
};

export default ProfileInfo;