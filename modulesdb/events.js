const mongoose = require("mongoose");



const Crm = new mongoose.Schema({

    eventtitle: {
        type: String,
    },
    eventyear: {
        type: String,
    },

    eventmonth: {
        type: String,
    },

    eventday: {
        type: String,
    },

    eventdis: {
        type: String,
    },





    timestamp: { type: Date, default: Date.now }



});


const Events = new mongoose.model('Events', Crm)
module.exports = Events;