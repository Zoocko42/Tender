const { AuthenticationError } = require('apollo-server-express');
const { Parent, Sitter, SitterReq } = require('../models');

const resolvers = {
    Query: {
        sitters: async () => {
            return Sitter.find().sort({ createdAt: -1 })
        },

        sitter: async () => {
            return Sitter.findOne({ username: sitterUsername });
        },

        parents: async () => {
            return Parent.find().sort({ createdAt: -1 })
        },

        parent: async () => {
            return Parent.findOne({ username: parentUsername })
        },

        sitterReqs: async () => {
            return SitterReq.find().sort({ createdAt: -1 })
        },

        sitterReq: async () => {
            return SitterReq.findOne({ _id: sitterReqID })
        }
    },
    Mutation: {
        addParent: async (parent, {username, password, email, firstName, lastName, city, state, aboutUs} ) => {
            
            return await Parent.create({username, password, email, firstName, lastName, city, state, aboutUs});
        },
        addSitter: async (parent, {username, password, email, firstName, lastName, city, state, aboutMe}) => {
            return await Sitter.create({username, password, email, firstName, lastName, city, state, aboutMe});
        },
        addSitterReq: async(parent, {parentUsername, date, time, price, city, state, specialRequests}) => {
            return await SitterReq.create({parentUsername, date, time, price, city, state, specialRequests});
        }
    }
}

module.exports = resolvers;