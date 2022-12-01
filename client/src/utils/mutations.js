
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
mutation Mutation($date: String!, $time: String!, $price: Int!, $city: String!, $specialRequests: String!) {
    addSitterReq(date: $date, time: $time, price: $price, city: $city, specialRequests: $specialRequests) {
      date
      time
      price
      city
      state
      submittedBy
      specialReq
    }
  }
`

export const UPDATE_SITTERREQ = gql `
mutation Mutation($sitterReqId: ID!, $date: String, $time: String, $price: Int, $city: String, $state: String, $matched: Boolean, $specialRequests: String) {
    updateSitterReq(sitterReqID: $sitterReqId, date: $date, time: $time, price: $price, city: $city, state: $state, matched: $matched, specialRequests: $specialRequests) {
      specialRequests
      state
      city
      price
      time
      date
      _id
      matched
      submittedBy
      createdAt
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