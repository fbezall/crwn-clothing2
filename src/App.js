import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Homepage from '../src/pages/homepage/homepage.component';
import Shoppage from './pages/shop/shop.component';
import {auth} from './firebase/firebase.utils';



 class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null


  componentDidMount() {
    this.nsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shoppage} />
        <Route path='/signin' component={SignInAndSignUp} />
      </Switch>
      </div>
    );
  }

}

export default App;
