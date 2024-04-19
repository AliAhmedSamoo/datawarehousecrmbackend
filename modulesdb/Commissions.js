const mongoose = require("mongoose");



const Crm = new mongoose.Schema({
   

   
    CustomerID: {
        type: String,
        
    },
    
    Ammount: {
        type: String,
        
    },
    note: {
        type: String,
        
    },

    status: {
        type: Boolean,
        default:false
        
    },
    
   
   
   
    timestamp: { type: Date, default: Date.now }
   


});


const Commissions = new mongoose.model('New Commissions form', Crm)
module.exports = Commissions;