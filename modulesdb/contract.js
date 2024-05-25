const mongoose = require("mongoose");



const Crm = new mongoose.Schema({

 
   

    ContractID : {
        type: String,
    },
    Client : {
        type: String,
    },
    StartDate : {
        type: String,
    },
    EndDate : {
        type: String,
    },
    Services : {
        type: String,
    },
    TermsandConditions : {
        type: String,
    },
    ContractValue : {
        type: String,
    },
    PaymentSchedule : {
        type: String,
    },
 
    ContractStatus : {
        type: String,
    },
    Attachments : {
        type: String,
    },
    
    


    timestamp: { type: Date, default: Date.now }



});


const Contract = new mongoose.model('New Contract form', Crm)
module.exports = Contract;