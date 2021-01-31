import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import StandardButton from "../common/components/StandartButton/StandartButton";


const Header = (props) => {
    return <header className={s.header}>
        <img alt="картинка" src='./img/logoP.png'/>

        <span className={s.loginBlok}>
                {
                    props.isAuth
                        ? <div>{props.login} - <StandardButton onClick={props.logout}>Logout</StandardButton></div>
                        : <NavLink to={'/login'}>Login</NavLink>
                }

            </span>

    </header>;
};

export default Header;
