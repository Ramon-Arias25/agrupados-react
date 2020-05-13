import React, { Component } from 'react';
//import { HashRouter, Route, Switch } from 'react-router-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Login from './views/login/Login'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Container>
          <div>
            <h1>Agrupados</h1>
            <Link to="/login">Login</Link>
            <Route path="/login" component={Login}/>
          </div>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
