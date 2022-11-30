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
    }

    type SitterReq {
        _id: ID
        parentID: Parent
        parentUsername: Parent!
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

        addSitterReq(parentID: ID, parentUsername: String!, date: String!, time: String!, price: Int!, city: String!, state: String, specialRequests: String!, createdAt: Date): SitterReq

        updateParent(username: String!, password: String!, email: String!, firstName: String!, lastName: String!, city: String!, state: String!, aboutUs: String, dependents: [String]): Parent
        
        updateSitter(username: String!, password: String!, email: String!, firstName: String!, lastName: String!, city: String!, state: String!, aboutMe: String, rating: Int): Sitter
        
        updateSitterReq(parentID: ID, parentUsername: String!, date: String!, time: String!, price: Int!, city: String!, state: String, specialRequests: String!, createdAt: Date, matched: Boolean): SitterReq

        removeParent(_id: ID!): Parent
        removeSitter(_id: ID!): Sitter
        removeSitterReq(_id: ID!): SitterReq
    }
`
module.exports = typeDefs;