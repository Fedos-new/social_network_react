import React from 'react';
import styles from "./User.module.css";
import userPhoto from "../../../assets/images/user.png";
import {NavLink} from "react-router-dom";


const User = ({user, followingInProgress, follow, unfollow}) => {
    return (
        <div className={styles.userWap}>
               <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                 className={styles.userPhoto}
                                 alt={"photo"}/>
                        </NavLink>

                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id)
                                      }}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id)
                                      }}>Follow</button>}
                    </div>
                 </span>
            <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location}</div>
                    </span>
                </span>
        </div>
    )
}

export default User;
