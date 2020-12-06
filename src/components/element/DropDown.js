import React from 'react';

import './DropDown.css';

const DropDown = () => {
    return(
        
        <div className="drop-select">
          <select className="select-options" >
            <option selected disabled className="option-placeholder">Search Stocks to add to wishlist</option>
            <option value="1" cl>Aphiria</option>
            <option value="2">Apple</option>
          </select>
        </div>
    );
};

export default DropDown;