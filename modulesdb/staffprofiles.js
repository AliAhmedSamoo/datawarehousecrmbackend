const mongoose = require("mongoose");



const Crm = new mongoose.Schema({
   
    FullName: {
        type: String,
        
    },
    DateOfBirth: {
        type: String,
        
    },
    Address: {
        type: String,
        
    },
    ContactDetails: {
        type: String,
        
    },
    NextOfKinNameandContactNumber: {
        type: String,
        
    },
    SocailSecurityNumber: {
        type: String,
        
    },
    IDNumber: {
        type: String,
        
    },
    EmergancyContactNumberAndName: {
        type: String,
        
    },
    Title: {
        type: String,
        
    },
    Department: {
        type: String,
        
    },
    Supervisor: {
        type: String,
        
    },
    WorkLocation: {
        type: String,
        
    },
    StartingDate: {
        type: String,
        
    },
    Salary: {
        type: String,
        
    },
    FacebookLink: {
        type: String,
        
    },
    TwitterLink: {
        type: String,
        
    },
    TiktiokLink: {
        type: String,
        
    },
    InstagramLink: {
        type: String,
        
    },
    youtubeLink: {
        type: String,
        
    },
    PerformanceAppraisalRelatedNotes: {
        type: String,
        
    },
    OfficalName: {
        type: String,
        
    },
    OfficalPosition: {
        type: String,
        
    },
    AppraisalDate: {
        type: String,
        
    },

    email: {
        type: String,
        
    },

    password: {
        type: String,
        
    },

    Condition: {
        type: String,
        
    },

    EmploymentType: {
        type: String,
        
    },
    
    IDType: {
        type: String,
        
    },
    cv: {
        type: String,
        
    },
    profilepic: {
        type: String,
        
    },
    
    
   
   
    timestamp: { type: Date, default: Date.now }
   


});


const StaffProfiles = new mongoose.model('Staff Profile', Crm)
module.exports = StaffProfiles;