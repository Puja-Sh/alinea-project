import React from 'react';

import './Title.css';

const Title = () => {
    return(
        <div className="home-main">
            <h1 className="home-title"> Popular Stock</h1>
                <div className="home-sub-title">
                    <p> COMPANY </p>
                    <p> MARKET PRICE </p>
                </div>
        </div>
    );
};

export default Title;