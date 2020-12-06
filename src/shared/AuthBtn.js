import React, { useState } from 'react';
import Modal from 'react-modal';

import FormContent from '../components/element/FormContent';
import './AuthBtn.css';
//import { auto } from 'async';

const AuthBtn = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return(
        <nav className="main-navigation__header-nav">
            <ul>
                <li className="main-navigation__li">
                    <button onClick={() => setModalIsOpen(true)}> SignUp</button>
                
                    <Modal 
                        isOpen={modalIsOpen} 
                        onRequestClose={() => setModalIsOpen(false)}
                        style= {
                            {
                                overlay: {
                                   
                                },
                                content: {
                                    margin:'auto',
                                    height:'60%',
                                    width:'70%',
                                    borderRadius:'20px'
                                }
                            }
                        }
                    >
                        <div className="modal-div">
                        <FormContent />
                        <button onClick={() => setModalIsOpen(false)} className="modal-close-btn">X</button>
                        </div>
                        
                    </Modal>
                </li>
            </ul>
        </nav>
    );
};

export default AuthBtn;