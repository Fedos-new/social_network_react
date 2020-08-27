import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return <header className={s.header}>
        <img alt="картинка" src='./img/logoP.png'/>

        <span className={s.loginBlok}>
                {
                    props.isAuth
                        ? props.login
                        : <NavLink to={'/login'}>Login</NavLink>
                }

            </span>

    </header>;
};

export default Header;