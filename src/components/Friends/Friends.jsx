import React from 'react';
import comStyle from "../common/style/Container.module.css";
import StandardButton from "../common/components/StandartButton/StandartButton";


const Friends = () => {



    return (
        <div  className={comStyle.wrapContainer}>
            Friends

            <StandardButton>My Friends</StandardButton>
        </div>
    )
};

export default Friends;
