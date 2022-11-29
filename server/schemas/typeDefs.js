const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type Sitter {
        _id: ID
        username: String!
        password: String!
        email: String!
        firstName: String!
        lastName: String!
        city: String!
        state: String!
        aboutMe: String
    }

    type User {
        
    }


`