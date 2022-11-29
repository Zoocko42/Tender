const { Schema, model } = require('mongoose');

const sitterReqSchema = new Schema ({
    parentID: {
        type: Number,
        
    },
    parentUsername: {
        type: String,
        required: true,
    },
    date: {

    },
    time: {

    },
    price: {
        type: Number,


    },
    city: {
        type: String,
        required: true,  
    },
    state: {
        type: String,
// need to add length
    },
    specialRequests: {
        type: String,
        required: true,
    },
    matched:
    {
    type: Boolean,
    },

});

const Sitterreq = model('sitterReq', sitterReqSchema);

module.exports = Sitterreq;