import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
//import Modal from 'react-modal';

import AuthBtn from './AuthBtn';
import Image from "./Image";
import './MainNavigation.css';

const MainNavigation = () => {
    return (
            <div className="main-header">
                <div className="header-part main-navigation__title">
                    <Image />
                </div>
              
                <nav className="main-navigation__header-nav">
                    <div className="middle-menu">
                        <ul className="nav-links">
                            <li>
                                <NavLink to="/" exact> Home </NavLink>
                            </li>
                            <li>
                                <NavLink to="/wishlist"> Watchlists</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <nav className="main-navigation__header-nav">
                    <AuthBtn />
                </nav>
            </div> 
        
    );
};

export default MainNavigation;