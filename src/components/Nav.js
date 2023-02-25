import React from 'react';
import Logo from "../img/Logo.svg";
import MainMenu from "./MainMenu";
import MobileMenu from "./MobileMenu";
import HamburgerBtn from "./HamburgerBtn";

const Nav = ({menuOpen, menuHandler}) => {
    return (
        <nav className="flex justify-between items-center pt-6">
            <a href="#"><img src={Logo} alt="Logo"/></a>
            <MainMenu/>
            {menuOpen && <MobileMenu/>}
            <HamburgerBtn menuHandler={menuHandler}/>
        </nav>
    );
};

export default Nav;