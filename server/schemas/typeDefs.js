const {gql} = require('apollo-server-express');



const typeDefs = gql`
    scalar Date

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
        rating: Int
    }

    type Parent {
        _id: ID
        username: String!
        password: String!
        email: String!
        firstName: String!
        lastName: String!
        city: String!
        state: String!
        aboutUs: String
        dependents: [String]
        sitterRequests: SitterReq
    }

    type SitterReq {
        _id: ID
        submittedBy: ID
        date: String!
        time: String!
        price: Int!
        city: String!
        state: String
        specialRequests: String!
        matched: Boolean
        createdAt: Date
    }

    type Query {
        sitters: [Sitter]
        sitter(sitterUsername: String!): Sitter
        parents: [Parent]
        parent(parentUsername: String!): Parent
        sitterReqs: [SitterReq]
        sitterReq(sitterReqID: ID!): SitterReq
    }

    type Mutation {
        addParent(username: String!, password: String!, email: String!, firstName: String!, lastName: String!, city: String!, state: String!, aboutUs: String): Parent
        loginParent(username: String!, password: String!): Parent

        addSitter(username: String!, password: String!, email: String!, firstName: String!, lastName: String!, city: String!, state: String!, aboutMe: String): Sitter
        loginSitter(username: String!, password: String!): Sitter

        addSitterReq(submittedBy: ID, date: String!, time: String!, price: Int!, city: String!, state: String, specialRequests: String!, createdAt: Date): SitterReq

        updateParent(username: String!, password: String!, email: String!, firstName: String!, lastName: String!, city: String!, state: String!, aboutUs: String, dependents: [String]): Parent
        
        updateSitter(username: String!, password: String!, email: String!, firstName: String!, lastName: String!, city: String!, state: String!, aboutMe: String, rating: Int): Sitter
        
        updateSitterReq(sitterReqID: ID!, date: String, time: String, price: Int, city: String, state: String, specialRequests: String, matched: Boolean): SitterReq

        removeParent(_id: ID!): Parent
        removeSitter(_id: ID!): Sitter
        removeSitterReq(sitterReqID: ID!): SitterReq
    }
`
module.exports = typeDefs;