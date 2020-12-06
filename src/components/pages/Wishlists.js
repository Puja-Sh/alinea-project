import React from 'react';

import './Wishlists.css';


import '../element/DropDown';
import DropDown from '../element/DropDown';

const Wishlists = () => {
   
    // for (const dropdown of document.querySelectorAll(".custom-select-wrapper")) {
    //     dropdown.addEventListener('click', function() {
    //         this.querySelector('.custom-select').classList.toggle('open');
    //     })
    // }
    
    
    // window.addEventListener('click', function(e) {
    //     for (const select of document.querySelectorAll('.custom-select')) {
    //         if (!select.contains(e.target)) {
    //             select.classList.remove('open');
    //         }
    //     }
    // });
    

    return (

       <div>
          <DropDown />
       </div>
    );
};

export default Wishlists;