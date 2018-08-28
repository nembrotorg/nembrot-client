import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const LOGIN = gql`
  mutation LoginUser($user: LoginUserInput!) {
    authenticateUser(input: $user) {
      jwtToken
    }
  }
`;

class Login extends Component {

  render() {
    let firstNameInput,
        lastNameInput,
        emailInput,
        passwordInput;

    return (
      <Mutation mutation={LOGIN}>
        {(registerUser, { loading, error, data }) => (
          <div>
            {error && <p>Error! {error.message}</p>}
            <form
              onSubmit={event => {
                event.preventDefault();
                registerUser({
                  variables: {
                    user: {
                      email: emailInput.value,
                      password: passwordInput.value,
                    }
                  }
                });
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
            <Link to="/user/register">Not yet registered?</Link>
          </div>
        )}
      </Mutation>
    );
  };
}

export default Login;
