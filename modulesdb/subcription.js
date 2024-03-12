const mongoose = require("mongoose");



const Crm = new mongoose.Schema({
   

    DeviceID: {
        type: String,
        
    },
    CustomerID: {
        type: String,
        
    },
    Package: {
        type: String,
        
    },
    DevicePrice: {
        type: String,
        
    },
    PackagePrice: {
        type: String,
        
    },
    SimPrice: {
        type: String,
        
    },
    Taxes: {
        type: String,
        
    },
    Other: {
        type: String,
        
    },
    SimID: {
        type: String,
        
    },
    SimNumber: {
        type: String,
        
    },
    SimStatus: {
        type: String,
        
    },
   
    
   
   
    timestamp: { type: Date, default: Date.now }
   


});


const Subription = new mongoose.model('New Subription form', Crm)
module.exports = Subription;