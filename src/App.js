import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Modal from 'react-modal';

//import StyleFirebaseUi from '.react-firebaseui/StyledFirebaseAuth';

import ModalComp from './components/element/ModalComp';
import ItemsData from './data/ItemsData';
import Title from './components/element/Title';
import Wishlists from './components/pages/Wishlists';
import MainNavigation from './shared/MainNavigation';

Modal.setAppElement('#root');

const App = () =>{
  return (
    <Router>
      <ModalComp />
        <MainNavigation />
          <main>
            <Switch>
              <Route path="/" exact>
                <Title />
                <ItemsData />
               
              </Route>
             
              <Route path="/wishlist">
                <Wishlists />
                <ItemsData />
              </Route>
            
              
            </Switch>
      
          </main>
        
    </Router>
  );
}


export default App;
