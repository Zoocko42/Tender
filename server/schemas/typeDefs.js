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
        submittedBy: String
        date: String!
        time: String!
        price: String!
        city: String!
        state: String
        specialRequests: String!
        matched: Boolean
        createdAt: Date
    }

    type AuthParent {
        token: ID!
        user: Parent
    }

    type AuthSitter {
        token: ID!
        user: Sitter
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
        addParent(username: String!, password: String!, email: String!, firstName: String!, lastName: String!, city: String!, state: String!, aboutUs: String): AuthParent
        loginParent(username: String!, password: String!): AuthParent

        addSitter(username: String!, password: String!, email: String!, firstName: String!, lastName: String!, city: String!, state: String!, aboutMe: String): AuthSitter
        loginSitter(username: String!, password: String!): AuthSitter

        addSitterReq(submittedBy: String, date: String!, time: String!, price: String!, city: String!, state: String, specialRequests: String!, createdAt: Date): SitterReq

        updateParent(username: String!, password: String!, email: String!, firstName: String!, lastName: String!, city: String!, state: String!, aboutUs: String, dependents: [String]): AuthParent
        
        updateSitter(username: String!, password: String!, email: String!, firstName: String!, lastName: String!, city: String!, state: String!, aboutMe: String, rating: Int): AuthSitter
        
        updateSitterReq(sitterReqID: ID!, date: String, time: String, price: Int, city: String, state: String, specialRequests: String, matched: Boolean): SitterReq

        removeParent(_id: ID!): Parent
        removeSitter(_id: ID!): Sitter
        removeSitterReq(sitterReqID: ID!): SitterReq
    }
`
module.exports = typeDefs;