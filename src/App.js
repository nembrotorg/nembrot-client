import React, { Component, } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Api from './pages/Api';
import Citations from './pages/Citations';
import Feature from './pages/Feature';
import Home from './pages/Home';
import Links from './pages/Links';
import Login from './pages/Login';
import LoginToolbar from './pages/LoginToolbar';
import Register from './pages/Register';
import Tags from './pages/Tags';
import Text from './pages/Text';
import Texts from './pages/Texts';
import { UserContextProvider, UserContext } from './helpers/UserContext';

class App extends Component {
  render() {
    return (
        <div className="App">
          <UserContextProvider>
            <footer className="App-header">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/texts">Texts</Link></li>
                <li><Link to="/citations">Citations</Link></li>
                <li><Link to="/links">Links</Link></li>
                <li><Link to="/tags">Tags</Link></li>
                <li><Link to="/api">API</Link></li>
              </ul>
            </footer>
            <hr />
            <UserContext.Consumer>
              {({user}) => user.signedIn? <LoginToolbar /> : <Login />}
            </UserContext.Consumer>
            <Switch>
              <Route path="/texts/:id" component={Text} />
              <Route exact path="/texts" component={Texts} />
              <Route exact path="/citations" component={Citations} />
              <Route exact path="/links" component={Links} />
              <Route exact path="/tags" component={Tags} />
              <Route exact path="/api" component={Api} />
              <Route exact path="/user/register" component={Register} />
              <Route exact path="/:feature/:featureId" component={Feature} />
              <Route exact path="/:feature" component={Feature} />
              <Route exact path="/" component={Home} />
            </Switch>
          </UserContextProvider>
        </div>
    );
  }
}

export default App;
