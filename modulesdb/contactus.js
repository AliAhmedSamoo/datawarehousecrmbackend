const mongoose = require("mongoose");



const Crm = new mongoose.Schema({

    Name: {
        type: String,
    },
    Subject: {
        type: String,
    },

    Email: {
        type: String,
    },

    Phone: {
        type: String,
    },

    Message: {
        type: String,
    },

    status: {
        type: Boolean,
        default: false
    },






    timestamp: { type: Date, default: Date.now }



});


const Contactus = new mongoose.model('Contactus', Crm)
module.exports = Contactus;