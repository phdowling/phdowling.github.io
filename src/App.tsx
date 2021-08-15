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

function App() {
  return (
    <div className="App">
     <Router>
      <Header links={{"/": "Home", "/links": "Links"}}/>
      <div className="MainContent"> 
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/links">
            <Links />
          </Route>
        </Switch>
      </div>
      <Footer/>
     </Router>
    </div>
  );
}

export default App;
