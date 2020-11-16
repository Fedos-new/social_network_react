import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "../ProfileStatus";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const getArray = () => {
        for(let i=0; i<props.profile.contacts.length; i++) {
            return props.profile.contacts[i]
        }
    }

    return (


        <div>
            {/*<div>*/}
            {/*    <img alt='картинка' src="https://image.freepik.com/free-photo/_8353-6518.jpg"/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>

                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div>
                    {`Имя : ` + props.profile.fullName}
                </div>
                <div>
                    {`Обо мне: ` + props.profile.aboutMe}
                </div>
                <div>
                    {props.profile.lookingForAJob === true ? "Ищу работу" : "Не ищу работу"}
                </div>
                <div>
                    {"Описание желаемой работы:  " + {getArray} }
                </div>



            </div>
        </div>
    )
};

export default ProfileInfo;