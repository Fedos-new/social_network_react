import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import StandardButton from "../common/components/StandardButton/StandardButton";
import style from "../Login/Login.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignInAlt, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import styles from "../Users/User/User.module.css";
import {PATH} from "../Routes";
import logo from '../../assets/images/logoP.png'



const Header = ({profile, login, logout, isAuth}) => {




    return <header className={s.header}>
        <img alt="картинка" src={logo}/>

        <span className={s.loginBlock}>
                {

                    isAuth
                        ? <div>{login}


                            {/*<img alt={'avatar-mini'} src={profile.photos.small || userPhoto}/>*/}
                            <StandardButton onClick={logout}
                                            className={style.logout}>Logout <FontAwesomeIcon icon={faSignOutAlt}
                                                                                             className={styles.iconBtn}/>
                            </StandardButton></div>
                        : <StandardButton className={style.logout}><NavLink to={PATH.LOGIN}>Login<FontAwesomeIcon
                            icon={faSignInAlt} className={styles.iconBtn}/></NavLink></StandardButton>
                }
            </span>
    </header>;
};

export default Header;
