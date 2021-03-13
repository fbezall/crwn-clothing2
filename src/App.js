import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Homepage from '../src/pages/homepage/homepage.component';

const Hatspage = () => (
  <h1>HATS PAGE</h1>
)
function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/hats' component={Hatspage} />
    </Switch>
    </div>
  );
}

export default App;
