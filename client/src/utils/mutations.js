
import { gql } from "@apollo/client";

export const ADDSITTER = gql`
mutation addSitter($username: String!, $password: String!, $email: String!, $firstName: String!, $lastName: String!, $city: String!, $state: String!, $aboutMe: String) {
  
    addSitter(username: $username, password: $password, email: $email, firstName: $firstName, lastName: $lastName, city: $city, state: $state, aboutMe: $aboutMe) {
  
  _id
  username
  password
  email
  firstName
  lastName
  city
  state
  aboutMe
  rating
  
    }
  }
 `

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