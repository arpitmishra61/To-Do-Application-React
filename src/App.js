import React from 'react';

import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {


  let users = [{
    name: "naman",
    email: "naman@gmail.com",
    password: "12345"
  }, {
    name: "roy",
    email: "roy@gmail.com",
    password: "12345"
  }, {
    name: "mohit",
    email: "mohit@gmail.com",
    password: "12345"
  }]
  for (let i = 0; i < 3; i++)

    localStorage.setItem(`User`, JSON.stringify(users))

  return (
    <Router>
      <div className="App">
        <Switch >
          <Route exact path="/app" component={Home} ></Route>

          <Route exact path="/" component={Login} ></Route>

        </Switch>

      </div>
    </Router>
  );

}

export default App;
