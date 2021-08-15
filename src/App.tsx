import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Links from './components/Links';

function App() {
  return (
    <div className="App">
     <Router>
      <Header links={{"/": "Home", "/links": "Links"}}/>
      <div> 
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/links">
            <Links />
          </Route>
        </Switch>
      </div>
     </Router>
    </div>
  );
}

export default App;
