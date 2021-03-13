import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Homepage from '../src/pages/homepage/homepage.component';
import Shoppage from './pages/shop/shop.component';



function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={Shoppage} />
    </Switch>
    </div>
  );
}

export default App;
