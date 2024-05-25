const mongoose = require("mongoose");



const Crm = new mongoose.Schema({

 
   

    Name : {
        type: String,
    },
    Position : {
        type: String,
    },
    Email : {
        type: String,
    },
    Contact : {
        type: String,
    },
    Phone : {
        type: String,
    },
    Address : {
        type: String,
    },



    timestamp: { type: Date, default: Date.now }



});


const Contacttttt = new mongoose.model('New Contacttttt form', Crm)
module.exports = Contacttttt;