const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

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
    },
    aboutMe: {
        type: String,
        required: false
    },
    rating: {
        type: Number,
    }
});

sitterSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // compare the incoming password with the hashed password
sitterSchema.methods.isCorrectPassword = async function (password) {
return bcrypt.compare(password, this.password);
};

const Sitter = model('Sitter', sitterSchema);

module.exports = Sitter;