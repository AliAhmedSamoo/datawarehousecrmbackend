const mongoose = require("mongoose");



const Crm = new mongoose.Schema({
   
    deviceType: {
        type: String,
        
    },
    manufacturer: {
        type: String,
        
    },
    batchNumber: {
        type: String,
        
    },
    MacAddress: {
        type: String,
        
    },
    serialNumber: {
        type: String,
        
    },
    IMEI: {
        type: String,
        
    },
    serverIP: {
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
    Assignto: {
        type: String,
        
    },
  
    
   
   
    timestamp: { type: Date, default: Date.now }
   


});


const device = new mongoose.model('Device', Crm)
module.exports = device;