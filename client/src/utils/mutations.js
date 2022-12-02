
import { gql } from "@apollo/client";

export const ADDSITTER = gql`
mutation AddSitter($username: String!, $password: String!, $email: String!, $firstName: String!, $lastName: String!, $city: String!, $state: String!, $aboutMe: String) {
  addSitter(username: $username, password: $password, email: $email, firstName: $firstName, lastName: $lastName, city: $city, state: $state, aboutMe: $aboutMe) {
    token
    user {
      _id
      username
    }
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
export const ADD_PARENT = gql`
mutation Mutation($username: String!, $password: String!, $email: String!, $firstName: String!, $lastName: String!, $city: String!, $state: String!) {
    addParent(username: $username, password: $password, email: $email, firstName: $firstName, lastName: $lastName, city: $city, state: $state) {
      token
      user {
        _id
        username
        password
        email
        firstName
        lastName
        city
        state
      }
    }
  }
`

export const ADD_SITTERREQ = gql`
mutation Mutation($date: String!, $time: String!, $price: String!, $city: String!, $specialRequests: String!, $submittedBy: String, $state: String) {
  addSitterReq(date: $date, time: $time, price: $price, city: $city, specialRequests: $specialRequests, submittedBy: $submittedBy, state: $state) {
    submittedBy
    date
    time
    price
    city
    state
    specialRequests
  }
}
`

export const UPDATE_SITTERREQ = gql `
mutation Mutation($date: String!, $time: String!, $price: String!, $city: String!, $specialRequests: String!, $submittedBy: String, $state: String) {
  addSitterReq(date: $date, time: $time, price: $price, city: $city, specialRequests: $specialRequests, submittedBy: $submittedBy, state: $state) {
    submittedBy
    date
    time
    price
    city
    state
    specialRequests
  }
}
`
export const REMOVE_SITTER_REQ = gql `
mutation Mutation($sitterReqId: ID!) {
    removeSitterReq(sitterReqID: $sitterReqId) {
      date
      time
      _id
      price
      city
      submittedBy
      state
      specialRequests
      matched
      createdAt
    }
  }
`