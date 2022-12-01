const { AuthenticationError } = require('apollo-server-express');
const { Parent, Sitter, SitterReq } = require('../models');
const {signToken} = require('../utils/auth')

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
            
            await Parent.create({username, password, email, firstName, lastName, city, state, aboutUs});
            const token = signToken(user);
            return {token, user}
        },
        addSitter: async (parent, {username, password, email, firstName, lastName, city, state, aboutMe}) => {
            await Sitter.create({username, password, email, firstName, lastName, city, state, aboutMe});
            const token = signToken(user);
            return {token, user}
        },
        addSitterReq: async(parent, {submittedBy, date, time, price, city, state, specialRequests}) => {
            if(context.user) {
            return await SitterReq.create({submittedBy, date, time, price, city, state, specialRequests});
            }
            throw new AuthenticationError('Please log in!');
        },
    
        loginParent: async (parent, {username, password}) => {
            const user = await Parent.findOne({username});

            if (!user) {
                throw new AuthenticationError('No parent user found with this username')
            }

            const correctPw = await user.isCorrectPassword(password)

            if (!correctPw) {
                throw new AuthenticationError('Password is incorrect');
            }

            const token = signToken(user);
            return {token, user};
        },

        loginSitter: async (parent, {username, password}) => {
            const sitter = await Sitter.findOne({username});

            if (!sitter) {
                throw new AuthenticationError('No parent user found with this username')
            }

            const correctPW = await sitter.isCorrectPassword(password)

            if (!correctPW) {
                throw new AuthenticationError('Password is incorrect');
            }


            const token = signToken(sitter);
            return {token, sitter};
        },

        updateSitterReq: async (parent, {id, date, time, price,city, state, matched, specialRequests } ) => {
            return await SitterReq.findOneAndUpdate(
                {sitterReqID: id},
                {date, time, price, city, state, matched, specialRequests}, 
                {new:true}
                );
        },

        removeSitterReq: async (parent, {sitterReqID}) => {
            console.log(sitterReqID);
            return SitterReq.findOneAndDelete ( { _id: sitterReqID});
        }
    }
}
module.exports = resolvers;