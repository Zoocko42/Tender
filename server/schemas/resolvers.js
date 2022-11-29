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
    }
}

module.exports = resolvers;