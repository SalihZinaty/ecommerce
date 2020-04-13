import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import './pages/HomePage/HomePage';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/Header/Header';
import SignsPage from './pages/SignsPage/SignsPage';

import {auth} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
   this.unsubscribeFromAuth =  auth.onAuthStateChanged(user => {
      this.setState({currentUser:user})
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
    render(){
      return (
        <div className="App">
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignsPage}/>
          </Switch>
        </div>
      );
  }
}

export default App;
