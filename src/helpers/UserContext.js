import React, { Component, createContext } from 'react';

export const UserContext = createContext();

export class UserContextProvider extends Component {
  state = {
    user: {
      name: null,
      role: 'unregistered',
      signedIn: false,
    }
  }

  componentDidUpdate() {
    // this.checkAuthentication();
  }

  componentDidMount() {
    this.checkAuthentication();
  }

  async checkAuthentication() {
    let parsedUserToken = '';
    const storedUserToken = localStorage.getItem('authToken');
    if (storedUserToken) {
      parsedUserToken = JSON.parse(window.atob(storedUserToken.split('.')[1]));
      this.setState({
        user: {
          name: `${ parsedUserToken.first_name } ${ parsedUserToken.last_name }`,
          role: parsedUserToken.role,
          signedIn: true,
        }
      });
    }
  }

  render() {
    return (
      <UserContext.Provider value={ this.state }>
        { this.props.children }
      </UserContext.Provider>
    );
  }
}
