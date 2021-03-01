import preloader from "../../../../assets/images/preloader.svg";
import React from "react";
import s from "./Preloader.module.css"

const Preloader = () => {
    return <div className={s.preloaderWrap}>
        <img alt={'Loading...'} src={preloader} className={s.preloader}/>
    </div>
}

export default Preloader;
