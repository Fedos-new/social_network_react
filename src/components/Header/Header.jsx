import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import StandardButton from "../common/components/StandartButton/StandartButton";
import style from "../Login/Login.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import styles from "../Users/User/User.module.css";
import {PATH} from "../Routes";


const Header = (props) => {

    return <header className={s.header}>
        <img alt="картинка" src='./img/logoP.png'/>

        <span className={s.loginBlock}>
                {
                    props.isAuth
                        ? <div>{props.login}
                            <StandardButton onClick={props.logout}
                                            className={style.logout}>Logout <FontAwesomeIcon icon={faSignOutAlt} className={styles.iconBtn}/>
                            </StandardButton></div>
                        : <NavLink to={PATH.LOGIN}>Login</NavLink>
                }
            </span>
    </header>;
};

export default Header;
