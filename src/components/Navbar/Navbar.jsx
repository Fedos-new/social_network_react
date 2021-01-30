import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsBar from "../Friends/FriendsBar";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faUser,
    faUsers,
    faUserCog,
    faHeadphones,
    faUserFriends,
    faWindowMaximize,
    faComments
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/profile' activeClassName={s.activeLink}>
                    <FontAwesomeIcon icon={faUser}/>
                    <span className={s.linkText}>Profile</span>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}><FontAwesomeIcon
                    icon={faComments}/>
                    <span className={s.linkText}>Messages</span>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}><FontAwesomeIcon
                    icon={faWindowMaximize}/>
                    <span className={s.linkText}>News</span>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.activeLink}><FontAwesomeIcon icon={faUsers}/>
                    <span className={s.linkText}>Users</span>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}><FontAwesomeIcon icon={faHeadphones}/>
                    <span className={s.linkText}>Music</span>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/setting' activeClassName={s.activeLink}><FontAwesomeIcon
                    icon={faUserCog}/>
                    <span className={s.linkText}>Settings</span>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/friends' activeClassName={s.activeLink}><FontAwesomeIcon
                    icon={faUserFriends}/>
                    <span className={s.linkText}>Friends</span>
                </NavLink>
            </div>
            <FriendsBar/>
        </nav>
    )
};

export default Navbar;
