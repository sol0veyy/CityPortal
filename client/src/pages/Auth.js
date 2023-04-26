import React from "react";
import "../css/auth.css"
import { LOGIN_ROUTE } from "../utils/consts";
import { useLocation } from "react-router-dom"

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    return (
        <div className="auth">
            <div className="blockAuth">
                <h1>
                    {isLogin ? 'Авторизация' : 'Регистрация'}
                </h1>
            </div>        
        </div>
    )
}

export default Auth;