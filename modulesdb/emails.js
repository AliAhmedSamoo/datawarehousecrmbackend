const mongoose = require("mongoose");



const Crm = new mongoose.Schema({










    to: {
        type: String,

    },
    sub: {
        type: String,

    },
    contant: {
        type: String,

    },
    fromname: {
        type: String,

    },
    fromemail: {
        type: String,

    },







    timestamp: { type: Date, default: Date.now }



});


const emails = new mongoose.model('emails', Crm)
module.exports = emails;