import './App.css';
import Header from './components/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Links from './components/Links';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
     <Router>
      <Header links={{"/": "Home", "/links": "Links", "/contact": "Contact"}}/>
      <div className="MainContent"> 
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/links">
            <Links />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
      <Footer/>
     </Router>
    </div>
  );
}

export default App;
