import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Feature from './containers/Texts/feature';
import Home from './containers/Home/index';
import Register from './containers/User/register';
import Tags from './containers/Tags/index';
import Text from './containers/Texts/show';
import Texts from './containers/Texts/index';

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
            <li>
              <Link to="/tags">Tags</Link>
            </li>
            <li>
              <Link to="/user/register">Register / Log in</Link>
            </li>
        </ul>
        </header>
        <Switch>
          <Route path="/texts/:id" component={Text} />
          <Route exact path="/texts" component={Texts} />
          <Route exact path="/tags" component={Tags} />
          <Route exact path="/user/register" component={Register} />
          <Route exact path="/:feature/:featureId" component={Feature} />
          <Route exact path="/:feature" component={Feature} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
