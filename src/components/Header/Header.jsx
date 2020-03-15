import React from 'react';
import s from './Header.module.css';
// import logo from './img/logoP.png';


const Header = () => {
    return <header className={s.header}>
            <img alt="картинка" src='./img/logoP.png'/>
    </header>;
};

export default Header;