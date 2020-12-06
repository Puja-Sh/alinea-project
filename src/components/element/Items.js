import React from 'react';

import './Items.css';

const Items = props => {
    return(
        <div className="home-main">

            <div className="items-list">
                <div className="company">
                <div className="items-image">
                    <img src={props.image} alt={props.name}/> 
                </div>  
                <div className="item-brand-name">
                    <p>{props.name}</p>
                </div>
                </div>
               
                <div className="items-detail">
                    <div className="home-sub-title details">
                        <p className="item-price">{props.price} </p> 
                        <p className="item-discount">{props.discount} </p>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Items;