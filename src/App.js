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
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/texts">Texts</Link>
            </li>
        </ul>
        </header>
        <Switch>
          <Route path="/texts/:id" component={Text} />
          <Route exact path="/texts" component={Texts} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
