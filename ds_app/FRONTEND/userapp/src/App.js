import React from 'react';
import './App.css';
import HomePage from './containers/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage}/>
        </Switch>
      </Router>
     <HomePage/>
    </div>
  );
}

export default App;
