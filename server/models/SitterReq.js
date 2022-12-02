const { Schema, model } = require('mongoose');

const sitterReqSchema = new Schema ({
    submittedBy: {
        type: String
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,  
    },
    state: {
        type: String,
    },
    specialRequests: {
        type: String,
        required: true,
        maxLength: 300
    },
    matched:
    {
    type: Boolean,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }

});

const Sitterreq = model('SitterReq', sitterReqSchema);

module.exports = Sitterreq;