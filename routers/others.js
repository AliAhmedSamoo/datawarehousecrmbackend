const express = require("express");
const router = new express.Router();
require('../db/connection');
const Contacttttt = require("../modulesdb/contact")
const Contract = require("../modulesdb/contract")

router.post("/addcontact", async (req, res) => {
    console.log(req.body)
    try {



        const { Name, Position, Email, Contact, Phone, Address } = req.body





        const newContact = await new Contacttttt({ Name, Position, Email, Contact, Phone, Address });
        await newContact.save()


        await Contacttttt.find().sort({ timestamp: -1 })
            .then(Modules => res.json(Modules))


    } catch (error) {
        console.log(error)
        res.send("Something Went Wrong Try Again")
    }


});

router.get("/getcontact", async (req, res) => {
    console.log("get contact")
    try {





        await Contacttttt.find().sort({ timestamp: -1 })
            .then(Modules => res.json(Modules))


    } catch (error) {
        console.log(error)
        res.send("Something Went Wrong Try Again")
    }


});


router.post("/dtlcontact", async (req, res) => {

    try {


        await Contacttttt.deleteOne(req.body)

        await Contacttttt.find().sort({ timestamp: -1 })
            .then(Modules => res.json(Modules))


    } catch (error) {
        console.log(error)
        res.send("Something Went Wrong Try Again")
    }


});












router.post("/addcontract", async (req, res) => {
    console.log(req.body)
    try {



        const { ContractID, Client, StartDate, EndDate, Services, TermsandConditions, ContractValue , PaymentSchedule , ContractStatus,Attachments  } = req.body





        const newContact = await new Contract({  ContractID, Client, StartDate, EndDate, Services, TermsandConditions, ContractValue , PaymentSchedule , ContractStatus,Attachments });
        await newContact.save()


        await Contract.find().sort({ timestamp: -1 })
            .then(Modules => res.json(Modules))


    } catch (error) {
        console.log(error)
        res.send("Something Went Wrong Try Again")
    }


});

router.get("/getcontract", async (req, res) => {
    console.log("get contact")
    try {





        await Contract.find().sort({ timestamp: -1 })
            .then(Modules => res.json(Modules))


    } catch (error) {
        console.log(error)
        res.send("Something Went Wrong Try Again")
    }


});


router.post("/dtlcontract", async (req, res) => {

    try {


        await Contract.deleteOne(req.body)

        await Contract.find().sort({ timestamp: -1 })
            .then(Modules => res.json(Modules))


    } catch (error) {
        console.log(error)
        res.send("Something Went Wrong Try Again")
    }


});





module.exports = router;