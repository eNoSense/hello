import React from 'react';
import './App.css';
import One from './One'
import Two from './Two'
import Describe from './Describe'
import {BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Describe}/>
          <Route exact path="/1" component={One}/>
          <Route exact path="/2" component={Two}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
