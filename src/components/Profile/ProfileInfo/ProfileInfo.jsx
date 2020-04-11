import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img alt='картинка' src="https://image.freepik.com/free-photo/_8353-6518.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
};

export default ProfileInfo;