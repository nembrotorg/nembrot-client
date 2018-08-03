import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { combineValidators, composeValidators,  isRequired, isAlphabetic } from 'revalidate';
import { createForm, FormSchema, FormProvider, Input } from 'apollo-forms';

// https://www.npmjs.com/package/apollo-forms

class Register extends Component {

  renderForm = () => {

    const fragment = gql`
      fragment client on User {
        firstName
        lastName
        email
        password
      }
    `;

    const inputQuery = gql`
      ${fragment}
      {
        userForm @client {
          ...client
        }
      }
    `;

    const errorsQuery = gql`
      ${fragment}
      {
        userFormErrors @client {
          ...client
        }
      }
    `;

    const validator = combineValidators({
      firstName: composeValidators(isRequired, isAlphabetic)('Name'),
      lastName: composeValidators(isRequired, isAlphabetic)('Surname'),
      email: composeValidators(isRequired, isAlphabetic)('Email'),
      password: composeValidators(isRequired, isAlphabetic)('Password'),
    });

    const initialData = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
    }

    const userMutation = gql`
      mutation($inputData: RegisterUserInput) {
        registerUser(inputData: $inputData)
      }
    `;

    const Form = createForm({
      errorsQuery: errorsQuery,
      inputQuery: inputQuery,
      mutation: userMutation,
    })(FormProvider);

    return (
      <FormProvider
        formName="userForm"
      >
        <Input
          field="firstName"
        />
        <Input
          field="lastName"
        />
        <Input
          type="email"
          field="email"
        />
        <Input
          type="password"
          field="password"
        />
        <button type="submit">Submit</button>
      </FormProvider>
    );
  };

  render() {
    return this.renderForm();
  };
}

export default Register;
