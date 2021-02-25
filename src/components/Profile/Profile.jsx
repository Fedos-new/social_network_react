import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import comStyle from "../common/style/Container.module.css";


const Profile = (props) => {


    return <div  className={comStyle.wrapContainer}>
        <ProfileInfo profile={props.profile}
                     status={props.status}
                     updateStatus={props.updateStatus}
                     isOwner={props.isOwner}
                     savePhoto={props.savePhoto}
                     saveProfile={props.saveProfile}
        />
        <MyPostsContainer />
    </div>
};

export default Profile;
