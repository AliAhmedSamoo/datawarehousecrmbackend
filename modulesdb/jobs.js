const mongoose = require("mongoose");



const Crm = new mongoose.Schema({

    jobtitle: {
        type: String,
    },
    Location: {
        type: String,
    },

    Condition: {
        type: String,
    },

    shift: {
        type: String,
    },

    Discription: {
        type: String,
    },





    timestamp: { type: Date, default: Date.now }



});


const jobs = new mongoose.model('jobs', Crm)
module.exports = jobs;