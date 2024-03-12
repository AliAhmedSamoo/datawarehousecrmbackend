const express = require("express");
const router = new express.Router();
require('../db/connection');
const StaffProfiles = require("../modulesdb/staffprofiles")
const career = require("../modulesdb/career")
const device = require("../modulesdb/devices")




router.post("/adddevice", async (req, res) => {
    console.log(req.body)
    try {
        const { deviceType, manufacturer, batchNumber, MacAddress, serialNumber, IMEI, serverIP, SimID, SimNumber, SimStatus } = req.body

        const newStaffProfiles = await new device({ deviceType, manufacturer, batchNumber, MacAddress, serialNumber, IMEI, serverIP, SimID, SimNumber, SimStatus });
        await newStaffProfiles.save()


        await device.find().sort({ timestamp: -1 })
            .then(Modules => res.json(Modules))


    } catch (error) {
        console.log(error)
        res.send("Something Went Wrong Try Again")
    }


});




router.get("/getdevices", async (req, res) => {

    try {

        await device.find().sort({ timestamp: -1 })
            .then(Modules => res.json(Modules))


    } catch (error) {
        console.log(error)
        res.send("Something Went Wrong Try Again")
    }


});



router.post("/dtldevice", async (req, res) => {

    try {


        await device.deleteOne(req.body)

        await device.find().sort({ timestamp: -1 })
            .then(Modules => res.json(Modules))


    } catch (error) {
        console.log(error)
        res.send("Something Went Wrong Try Again")
    }


});




module.exports = router;