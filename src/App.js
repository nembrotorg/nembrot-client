import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './containers/Home/index';
import Texts from './containers/Texts/index';
import Text from './containers/Texts/show';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React???</h1>
          <Link to="/">Home</Link>
          <Link to="/texts">Texts</Link>
          <Link to="/texts/75">Text</Link>
        </header>
        <Switch>
          <Route exact path="/texts" component={Texts} />
          <Route path="/texts/:id" component={Text} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
