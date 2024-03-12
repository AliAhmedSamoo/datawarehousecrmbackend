const express = require("express");
const router = new express.Router();
require('../db/connection');
const StaffProfiles = require("../modulesdb/staffprofiles")
const career = require("../modulesdb/career")
const bcrypt = require('bcrypt');
const saltRounds = 10;


router.post("/addstaff", async (req, res) => {
    // console.log(req.body)
    try {



        const { FullName, DateOfBirth, Address, ContactDetails, NextOfKinNameandContactNumber, SocailSecurityNumber, IDNumber, EmergancyContactNumberAndName, Title, Department, Supervisor, WorkLocation, StartingDate, Salary, FacebookLink, TwitterLink, TiktiokLink, InstagramLink, youtubeLink, PerformanceAppraisalRelatedNotes, OfficalName, OfficalPosition, AppraisalDate, IDType, EmploymentType, Condition, password, email } = req.body

        const salt = await bcrypt.genSalt(saltRounds);

        // Hash the password with the unique salt
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log(hashedPassword)

        const user = await StaffProfiles.findOne({ email: email })

        // console.log(user)

        if (user) {
            console.log("user found")
            res.json("user found")
        } else {





            const newStaffProfiles = await new StaffProfiles({ FullName, DateOfBirth, Address, ContactDetails, NextOfKinNameandContactNumber, SocailSecurityNumber, IDNumber, EmergancyContactNumberAndName, Title, Department, Supervisor, WorkLocation, StartingDate, Salary, FacebookLink, TwitterLink, TiktiokLink, InstagramLink, youtubeLink, PerformanceAppraisalRelatedNotes, OfficalName, OfficalPosition, AppraisalDate, IDType, EmploymentType, Condition, password: hashedPassword, email });
            await newStaffProfiles.save()


            await StaffProfiles.find().sort({ timestamp: -1 })
                .then(Modules => res.json(Modules))
        }

    } catch (error) {
        console.log(error)
        res.send("Something Went Wrong Try Again")
    }


});




router.post("/addstaffcareer", async (req, res) => {
    console.log(req.body)



    try {
        const { FullName, DateOfBirth, Address, ContactDetails, NextOfKinNameandContactNumber, SocailSecurityNumber, IDNumber, EmergancyContactNumberAndName, FacebookLink, TwitterLink, TiktiokLink, InstagramLink, youtubeLink, PerformanceAppraisalRelatedNotes } = req.body

        const newStaffProfiles = await new career({ FullName, DateOfBirth, Address, ContactDetails, NextOfKinNameandContactNumber, SocailSecurityNumber, IDNumber, EmergancyContactNumberAndName, FacebookLink, TwitterLink, TiktiokLink, InstagramLink, youtubeLink, PerformanceAppraisalRelatedNotes });
        await newStaffProfiles.save()
        res.json("formsubmitted")

        // await StaffProfiles.find().sort({ timestamp: -1 })
        //     .then(Modules => res.json(Modules))


    } catch (error) {
        console.log(error)
        res.send("Something Went Wrong Try Again")
    }


});









router.post("/addstaffedit", async (req, res) => {
    console.log(req.body)
    try {
        const { _id, FullName, DateOfBirth, Address, ContactDetails, NextOfKinNameandContactNumber, SocailSecurityNumber, IDNumber, EmergancyContactNumberAndName, Title, Department, Supervisor, WorkLocation, StartingDate, Salary, FacebookLink, TwitterLink, TiktiokLink, InstagramLink, youtubeLink, PerformanceAppraisalRelatedNotes, OfficalName, OfficalPosition, AppraisalDate } = req.body

        await StaffProfiles.findOneAndUpdate(
            { _id },
            {
                FullName,
                DateOfBirth,
                Address,
                ContactDetails,
                NextOfKinNameandContactNumber,
                SocailSecurityNumber,
                IDNumber,
                EmergancyContactNumberAndName,
                Title,
                Department,
                Supervisor,
                WorkLocation,
                StartingDate,
                Salary,
                FacebookLink,
                TwitterLink,
                TiktiokLink,
                InstagramLink,
                youtubeLink,
                PerformanceAppraisalRelatedNotes,
                OfficalName,
                OfficalPosition,
                AppraisalDate




            },
            { new: true }
        );
        const user3 = await StaffProfiles.findOne({ _id })
        res.json(user3);

    } catch (error) {
        console.log(error)
        res.send("Something Went Wrong Try Again")
    }


});





router.get("/getstaffprofiles", async (req, res) => {

    try {

        await StaffProfiles.find().sort({ timestamp: -1 })
            .then(Modules => res.json(Modules))


    } catch (error) {
        console.log(error)
        res.send("Something Went Wrong Try Again")
    }


});

router.get("/getstaffprofilescareer", async (req, res) => {

    try {

        await career.find().sort({ timestamp: -1 })
            .then(Modules => res.json(Modules))


    } catch (error) {
        console.log(error)
        res.send("Something Went Wrong Try Again")
    }


});

router.post("/dtlstaffprofiles", async (req, res) => {

    try {


        await StaffProfiles.deleteOne(req.body)

        await StaffProfiles.find().sort({ timestamp: -1 })
            .then(Modules => res.json(Modules))


    } catch (error) {
        console.log(error)
        res.send("Something Went Wrong Try Again")
    }


});

router.post("/dtlstaffprofilescareer", async (req, res) => {
    console.log(req.body)
    try {


        await career.deleteOne(req.body)

        await career.find().sort({ timestamp: -1 })
            .then(Modules => res.json(Modules))


    } catch (error) {
        console.log(error)
        res.send("Something Went Wrong Try Again")
    }


});



router.post("/viewstaffprofile", async (req, res) => {

    try {


        console.log(req.body)

        await StaffProfiles.findOne(req.body)
            .then(Modules => res.json(Modules))


    } catch (error) {
        console.log(error)
        res.send("Something Went Wrong Try Again")
    }


});

router.post("/viewstaffprofilecareer", async (req, res) => {

    try {


        console.log(req.body)

        await career.findOne(req.body)
            .then(Modules => res.json(Modules))


    } catch (error) {
        console.log(error)
        res.send("Something Went Wrong Try Again")
    }


});

router.post("/acceptinterviesstaffprofilescareer", async (req, res) => {


    const { _id } = req.body
    console.log(_id)
    try {



        await career.findOneAndUpdate(
            { _id },
            {
                status: "interview",



            },
            { new: true }
        );

        await res.json("acee")

    } catch (error) {
        console.log(error)
        res.send("Something Went Wrong Try Again")
    }


});


router.post("/login", async (req, res) => {

    const { email, password } = req.body;
    console.log(req.body)
    try {
        const user = await StaffProfiles.findOne({ email: email })

        if (user) {
            const enteredPassword = password;
            console.log(user)

            const passwordMatch = await bcrypt.compare(enteredPassword, user.password);


            if (passwordMatch) {
                if (user.status === false) {

                    console.log("Account is disable by Admin");
                    res.json("Account is disable by Admin");
                } else {
                    console.log("Password is correct.");
                    res.json(user);
                }
            } else {

                console.log("Password is incorrect.");
                res.json("Password is incorrect.");
            }
        } else {



            console.log("user not found")
            res.json("user not found")


        }

    } catch (error) {
        console.error(error);

    }



})


module.exports = router;