import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import './pages/HomePage/HomePage';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import CheckOutPage from './pages/CheckOut/CheckOut';
import Header from './components/Header/Header';
import SignsPage from './pages/SignsPage/SignsPage';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/userActions';

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            
          });
        });
      }

     setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
    render(){
      return (
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckOutPage}/>
            <Route exact path='/signin' 
              render={() => this.props.currentUser ? <Redirect to='/' /> : <SignsPage />}/>
          </Switch>
        </div>
      );
  }
}
const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))

})


export default connect(mapStateToProps,mapDispatchToProps)(App);
