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

    Mutations: {
        parentLogin: async (parent, {username, password}) => {
            const parent = await Parent.findOne({username});

            if (!parent) {
                throw new AuthenticationError('No parent user found with this username')
            }

            const correctPW = await parent.isCorrectPassword(password)

            if (!correctPW) {
                throw new AuthenticationError('Password is incorrect');
            }

            return {parent};
        },

        sitterLogin: async (sitter, {username, password}) => {
            const sitter = await Sitter.findOne({username});

            if (!sitter) {
                throw new AuthenticationError('No parent user found with this username')
            }

            const correctPW = await sitter.isCorrectPassword(password)

            if (!correctPW) {
                throw new AuthenticationError('Password is incorrect');
            }

            return {sitter};
        }
    }
}

module.exports = resolvers;