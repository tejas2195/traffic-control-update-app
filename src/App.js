import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import LoginPage from './Components/Pages/Login';
import HomePage from './Components/Pages/HomePage';
import Dashboard from './Components/Pages/Dashboard';
import SignUpPage from './Components/Pages/SignUpPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' ><HomePage/></Route>
        <Route exact path='/login' ><LoginPage name={'tejas'} sex={'male'} /></Route>
        <Route exact path='/dashboard' ><Dashboard/></Route>
        <Route exact path='/signUpPage' ><SignUpPage/></Route>
      </Switch>
    </Router>
  );
}

export default App;
