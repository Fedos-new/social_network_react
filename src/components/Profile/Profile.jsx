import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return  <div className={s.content}>
        <img alt='картинка' src="https://www.worldatlas.com/r/w1200-h701-c1200x701/upload/36/4f/c4/shutterstock-239392108.jpg"/>

        <div>
            ava + description
        </div>
        <MyPosts/>
    </div>
};

export default Profile;