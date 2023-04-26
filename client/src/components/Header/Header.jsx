import React from "react";
import logo from "../../img/logo.svg"
import { NavLink } from "react-router-dom"
import "./header.css"
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../../utils/consts";

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo" />
            <div className="rightBlock">
                <span>Решено заявок: 30шт.</span>
                <NavLink to={LOGIN_ROUTE}>
                    <button>Личный кабинет</button>
                </NavLink>
                <NavLink to={REGISTRATION_ROUTE}>
                    <button>Регистрация</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Header;