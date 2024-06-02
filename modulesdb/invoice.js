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
    status: {
        type: String,
        default: "unpaid"
    },
    
    Shipto : {
        type: String,
       
    },
    Currency : {
        type: String,
       
    },
    SalesAgent  : {
        type: String,
       
    },
    InvoiceBillingDate  : {
        type: String,
       
    },
    InvoiceDuedate : {
        type: String,
       
    },
    Recurring : {
        type: String,
       
    },
    DiscountType  : {
        type: String,
       
    },
    TotalCycles  : {
        type: String,
       
    },
    Depositpaid   : {
        type: String,
       
    },
    Levies   : {
        type: String,
       
    },
    Donatetoacharity  : {
        type: String,
       
    },
    TotalToPay  : {
        type: String,
       
    },
   
    
   
   
    timestamp: { type: Date, default: Date.now }
   


});


const Invoice = new mongoose.model('New Invoice form', Crm)
module.exports = Invoice;