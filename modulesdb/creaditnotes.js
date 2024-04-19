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
    
   
   
   
    timestamp: { type: Date, default: Date.now }
   


});


const Creaditnotes = new mongoose.model('New Creaditnotes form', Crm)
module.exports = Creaditnotes;