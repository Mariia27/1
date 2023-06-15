import React from "react";
import style from "./Header.module.css";
// import UserMenu from "./userMenu";
// import { NavLink } from "react-router-dom";
// import logo from "../../assets/images/logo.svg";
// import { useSelector } from "react-redux";
// import { getIsLoggedIn } from "../../redux/auth/selectors";
// import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
function Header() {

    // const isLoggedIn = useSelector(getIsLoggedIn);
    // const location = useLocation()
    return (
        <header className={style.header}>
            <div className={style.container}>
                {/* <NavLink to="/shops" className={style.container}> */}
                <p className={style.shops}>Shops</p>
                {/* </NavLink> */}

                <p className={style.card}>Shoping card</p>
                {/* <Link to={isLoggedIn ? "/shop" : "/"}>
                    <img src={logo} alt="" width={90} height={30} />
                </Link>
                {isLoggedIn && <NavLink to="/team" className={style.container}>
                    <p className={style.text}>Показать команду</p>
                </NavLink>}
                {location.pathname === '/team' &&
                    <NavLink to="/home" className={style.container}>
                        <p className={style.text}>На главную</p>
                    </NavLink>}
                {isLoggedIn && <UserMenu />} */}
            </div>
        </header>
    );
}
export default Header
