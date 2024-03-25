const express = require("express");
const router = new express.Router();
require('../db/connection');
const StaffProfiles = require("../modulesdb/staffprofiles")
const career = require("../modulesdb/career")
const device = require("../modulesdb/devices")
const Apblogs = require("../modulesdb/Apblogs");
const emails = require("../modulesdb/emails");



router.post('/upload', async (req, res) => {


    console.log(req.body)
    try {



        const { category, title, description, authorName, authoremail, cover, authorid } = req.body








        const apblogs = await new Apblogs({ category, title, description, authorName, authoremail, cover, authorid });
        const ddd = await apblogs.save()

        console.log(ddd)
        await Apblogs.find().sort({ timestamp: -1 })
            .then(Modules => res.json(Modules))

    } catch (error) {
        console.log(error)
        res.send("Something Went Wrong Try Again")
    }

});


router.post('/emaillll', async (req, res) => {


    console.log(req.body)
    try {



        const { to, sub, contant, fromname, fromemail } = req.body








        const apblogs = await new emails({ to, sub, contant, fromname, fromemail });
        const ddd = await apblogs.save()

        console.log(ddd)
        await emails.find().sort({ timestamp: -1 })
            .then(Modules => res.json(Modules))

    } catch (error) {
        console.log(error)
        res.send("Something Went Wrong Try Again")
    }

});





router.get("/apblog", async (req, res) => {



    try {

        await Apblogs.find().sort({ timestamp: -1 })
            .then(Modules => res.json(Modules))

    } catch (error) {
        console.error(error);

    }



})

router.get("/getemaillll", async (req, res) => {



    try {

        await emails.find().sort({ timestamp: -1 })
            .then(Modules => res.json(Modules))

    } catch (error) {
        console.error(error);

    }



})




module.exports = router;