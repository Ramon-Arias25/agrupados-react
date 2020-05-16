import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
//Component
import Login from './views/login/Login';
import Register from './views/Register/Register';
import './App.scss';
class App extends Component {

  render() {
    return (
      <BrowserRouter>      
      <div className="container p-4">
        <Route path="/" exact component={Login} /> 
        <Route path="/Register" exact component={Register} />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
