const { Schema, model } = require('mongoose');

const dependentSchema = new Schema ({
    type: { type: String, required: true},
    name: { type: String},
    age: Number, 
    });

const parentSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        unique: true,
        required: true,
        minLegnth: 3,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
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
    dependents: [dependentSchema],
    aboutUs: {
        type: String,
        required: false,
    }
});

const Parent = model('Parent', parentSchema);

module.exports = Parent;