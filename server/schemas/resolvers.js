const { AuthenticationError } = require('apollo-server-express');
const { Parent, Sitter } = require('../models');

const resolvers = {
    Query: {
        sitters: async () => {
            return Sitter.find().sort({ createdAt: -1 })
        },

        sitter: async () => {
            return Sitter.findOne({ username: sitterUsername });
        }

        
    }
}

module.exports = resolvers;