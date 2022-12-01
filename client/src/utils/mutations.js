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