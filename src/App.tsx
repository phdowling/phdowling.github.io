import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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


/*function App() {
  return (
    <div className="App">
        <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
