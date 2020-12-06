import React from 'react';

import './Image.css';
import logo from '../data/image/main-logo.png';

const Image = () => {
    return(
        <img src={logo} alt="logo" className="logo-image"/>
    );
};

export default Image;