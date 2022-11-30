const { Schema, model } = require('mongoose');

const sitterReqSchema = new Schema ({
    submittedBy: {
        type: Schema.Types.ObjectId,
        ref: "Parent"
        // required: true,
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: "string",
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    city: {
        type: String,
        required: true,  
    },
    state: {
        type: String,
        maxLength: 2 
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