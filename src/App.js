import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Homepage from '../src/pages/homepage/homepage.component';
import Shoppage from './pages/shop/shop.component';

import {setCurrentUser} from './redux/user/user.actions';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';



 class App extends React.Component {

  unsubscribeFromAuth = null


  componentDidMount() {
      const {setCurrentUser} = this.props;

    this.subscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
          });
         
        });
      } else {
        setCurrentUser(userAuth);
      }
     
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shoppage} />
        <Route exact path='/signin' render= {() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)} />
      </Switch>
      </div>
    );
  }

}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
