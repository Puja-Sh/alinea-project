import React from 'react';

import './FormContent.css';

const FormContent = () => {
    return (
        <div className="modal-comp-div">
            <div className="div-left">
                <p> Keep Track Of Your Stock</p>
            </div>
            <div className="main-form-div">
            <form className="main-form">
                <label className="label"> Email</label>
                <input type="text" className="input-text" id="email" name="user" placeholder="Email" />
                <label className="label"> Password </label>
                <input type="text" className="input-text" id="email" name="user" placeholder="Password"/>
                <button className="modal-sign-btn"> SignUp </button>
            </form>
            </div>
        </div>
    );
};

export default FormContent;