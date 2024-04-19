const mongoose = require("mongoose");



const Crm = new mongoose.Schema({
   

   
    CustomerID: {
        type: String,
        
    },
    
    Year: {
        type: String,
        
    },
    Month: {
        type: String,
        
    },
    Status: {
        type: String,
        
    },
    Commission: {
        type: String,
        
    },

    allowance: {
        type: String,
        
    },
    Salary: {
        type: String,
        
    },
    CommissionId: {
        type: String,
        
    },
 
 
 
 
 
    
   
   
   
    timestamp: { type: Date, default: Date.now }
   


});


const Salary = new mongoose.model('New Salary form', Crm)
module.exports = Salary;