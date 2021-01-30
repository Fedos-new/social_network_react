import React from 'react';
import s from './FriendsBar.module.css';
import av1 from '../Friends/imgFriends/1.png';
import av2 from '../Friends/imgFriends/2.png';
import av3 from '../Friends/imgFriends/3.png';

const FriendsBar = () => {
    return (
        <div>
            <div className={s.itemImg}>
                <img src={av1} alt="avatar" />
                <img src={av1} alt="avatar" />
                <img src={av3} alt="avatar" />
                <img src={av1} alt="avatar" />
                <img src={av2} alt="avatar" />
                <img src={av3} alt="avatar" />

            </div>
        </div>

    )
};

export default FriendsBar;
