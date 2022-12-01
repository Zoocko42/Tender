import { gql } from '@apollo/client';

export const LOGIN_PARENT = gql`
mutation LoginParent($username: String!, $password: String!) {
    loginParent(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`

export const LOGIN_SITTER = gql`
mutation Mutation($username: String!, $password: String!) {
    loginSitter(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`