import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import './pages/HomePage/HomePage';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/shop/ShopPage';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
