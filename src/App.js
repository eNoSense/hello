import React from 'react';
import './App.css';
import Signin from './Signin'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" render={() => (
            <Redirect to="/signin"/>
          )}/>
          <Route path="/signin" component={Signin}/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
