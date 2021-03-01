import React from 'react';
import comStyle from "../common/style/Container.module.css";
import s from "../common/style/Banner.module.css";
import banner from "../../assets/images/inDevelopment.png";


const Music = () => {
    return (
        <div className={comStyle.wrapContainer}>
            <div className={s.wrapBanner}>
                <img src={banner} alt="in development" className={s.banner}/>
            </div>
        </div>
    )
};

export default Music;
