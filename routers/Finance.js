const express = require("express");
const router = new express.Router();
require('../db/connection');
const StaffProfiles = require("../modulesdb/staffprofiles")
const career = require("../modulesdb/career")
const bcrypt = require('bcrypt');
const saltRounds = 10;
const Creaditnotes = require("../modulesdb/creaditnotes")
const Commissions = require("../modulesdb/Commissions")
const Salary = require("../modulesdb/salary")
const { ObjectId } = require('mongoose').Types;


router.post("/addcreaditnote", async (req, res) => {
    console.log(req.body)
    try {



        const { note, Ammount, CustomerID } = req.body





        const newCreaditnotes = await new Creaditnotes({ note, Ammount, CustomerID });
        await newCreaditnotes.save()


        await Creaditnotes.find().sort({ timestamp: -1 })
            .then(Modules => res.json(Modules))


    } catch (error) {
        console.log(error)
        res.send("Something Went Wrong Try Again")
    }


});


router.get("/getcreaditnotes", async (req, res) => {
    console.log(req.body)
    try {





        await Creaditnotes.find().sort({ timestamp: -1 })
            .then(Modules => res.json(Modules))


    } catch (error) {
        console.log(error)
        res.send("Something Went Wrong Try Again")
    }


});




router.post("/addCommissions", async (req, res) => {
    console.log(req.body)
    try {



        const { note, Ammount, CustomerID } = req.body





        const newCommissions = await new Commissions({ note, Ammount, CustomerID });
        await newCommissions.save()


        await Commissions.find().sort({ timestamp: -1 })
            .then(Modules => res.json(Modules))


    } catch (error) {
        console.log(error)
        res.send("Something Went Wrong Try Again")
    }


});


router.get("/getCommissions", async (req, res) => {
    console.log(req.body)
    try {





        await Commissions.find().sort({ timestamp: -1 })
            .then(Modules => res.json(Modules))


    } catch (error) {
        console.log(error)
        res.send("Something Went Wrong Try Again")
    }


});





router.post("/addsalary", async (req, res) => {
    console.log(req.body)
    try {



        const { Salaryy, Year, Month, CustomerID, Commission, CommissionId, allowance } = req.body





        const newSalary = await new Salary({ Salary: Salaryy, Year, Month, CustomerID, Commission, CommissionId, allowance, Status: "paid" });
        await newSalary.save()

        const criteria = {
          
            CustomerID
        };
        
       
        const update = {
            $set: { status: true } 
        };
        
       
        await Commissions.updateMany(criteria, update);

        await Salary.find().sort({ timestamp: -1 })
            .then(Modules => res.json(Modules))


    } catch (error) {
        console.log(error)
        res.send("Something Went Wrong Try Again")
    }


});


router.get("/getsalary", async (req, res) => {
    console.log(req.body)
    try {





        await Salary.find().sort({ timestamp: -1 })
            .then(Modules => res.json(Modules))


    } catch (error) {
        console.log(error)
        res.send("Something Went Wrong Try Again")
    }


});










module.exports = router;