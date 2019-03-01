import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';

const LOGIN = gql`
  mutation AuthenticateUser($user: AuthenticateUserInput!) {
    authenticateUser(input: $user) {
      jwtToken
    }
  }
`;

class Login extends Component {

  render() {
    let emailInput,
        passwordInput;

    return (
      <Mutation
        mutation={LOGIN}
        onCompleted={data => {
          const token = data.authenticateUser.jwtToken;
          if (!token) {
            console.log('SET STATE ERROR = NOT LOGGED IN');
            return;
          }
          console.log('LOGGED IN???', data.authenticateUser.jwtToken)
        }}
      >
        {(authenticateUser, { loading, error, data, client }) => {
          if (data && data.authenticateUser.jwtToken) {
            localStorage.setItem('authToken', data.authenticateUser.jwtToken);
            client.resetStore();
            const parsedToken = JSON.parse(window.atob(data.authenticateUser.jwtToken.split('.')[1]));
            console.log(parsedToken);
            console.log('CLIENT ==>', client);
            client.writeData({ data: {
              user: {
                exp: parsedToken.exp,
                firstName: parsedToken.first_name,
                lastName: parsedToken.last_name,
                role: parsedToken.role,
                userId: parsedToken.user_id,
                }
              }
            });
            // const userId = JSON.parse(window.atob(data.authenticateUser.jwtToken.split('.')[1]));
            return (<p>You are logged in, {parsedToken.first_name}!</p>);
          }

          return (
            <div>
              {/* <h1>{this.state.user.firstName}</h1> */}
              {error && <p>Error! {error.message}</p>}
              {data && !authenticateUser.jwtToken && <p>
                Log in failed!
              </p>}
              {!authenticateUser.jwtToken &&
                <form
                  onSubmit={event => {
                    event.preventDefault();
                    authenticateUser({
                      variables: {
                        user: {
                          email: emailInput.value,
                          password: passwordInput.value,
                        }
                      }
                    }).then(response => <strong>LOGGEDIN</strong>)
                    .catch(err => console.log('ERROR, err'));
                  }}
                >
                  <input
                    ref={node => { emailInput = node; }}
                    type="email"
                    required
                  />
                  <input
                    ref={node => { passwordInput = node; }}
                    type="password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    required
                  />
                  <button type="submit">Log in</button>
                </form>
              }
              <Link to="/user/register">Not yet registered?</Link>
            </div>
          );
        }}
      </Mutation>
    );
  };
}

export default Login;
