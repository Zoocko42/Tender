const { Schema, model } = require('mongoose');

const sitterSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,

    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 3
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
        maxLength: 2
    },
    aboutMe: {
        type: String,
        required: false
    }
})

const Sitter = model('Sitter', sitterSchema);

module.exports = Sitter;