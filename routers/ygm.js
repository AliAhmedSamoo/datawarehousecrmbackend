const express = require("express");
const router = new express.Router();
require('../db/connection');

const puppeteer = require("puppeteer");
const axios = require('axios');
const fs = require("fs");




var token2222 = ""
async function taketoken3() {

    let data = JSON.stringify({
        "email": "partner@enbiosis.com",
        "password": "partner123",
        "userType": "partner"
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api-staging.enbiosis.com/v1/login',
        headers: {
            'Content-Type': 'application/json',
            'Cookie': 'enbiosis_session=LYcevQn5DWN7wWmbSqzwJO6aAcm0WlI6e5Dwewcw'
        },
        data: data
    };

    axios.request(config)
        .then((response) => {
            token2222 = response.data.access_token;
            return response.data.access_token
        })
        .catch((error) => {
            console.log(error);
        });

}


taketoken3()

router.post("/generate-pdf", async (req, res) => {
    const { kitcode } = req.body; // Get kitcode from the request body
    const dates = Date.now()

    try {
        // const url = "https://spacegutlatest.web.app/" + kitcode; // Target URL
        const url = "https://spacegutlatest.web.app/SGDEMO"; // Target URL

        // Launch Puppeteer
        const browser = await puppeteer.launch({
            headless: true,
          
            args: [
                '--no-sandbox', // Disable sandboxing (required for Heroku)
                '--disable-setuid-sandbox', // Further disables privilege escalation
                '--disable-dev-shm-usage', // Avoids shared memory issues
                '--headless', // Run Chrome in headless mode
                '--disable-gpu', // Disable GPU (not necessary for headless mode)
            ],
        });

        const page = await browser.newPage();
        await page.goto(url, { waitUntil: "networkidle2" });

        // Introduce a delay (if needed)
        await new Promise((resolve) => setTimeout(resolve, 20000));

        // Generate PDF as a Buffer
        const pdfBuffer = await page.pdf({
            format: "A4",
            printBackground: true,
            margin: { top: 0, right: 0, bottom: 0, left: 0 }, // Remove margins
        });


        const tempFilePath = `${kitcode}-microbiome-analysis-report-${dates}.pdf`;

        await fs.writeFileSync(tempFilePath, pdfBuffer);
        // Close the Puppeteer browser

        // Create FormData and append PDF buffer
        const FormData = require("form-data");
        const data = new FormData();
        data.append("slug", "microbiome-analysis-report");
        // data.append("file", pdfBuffer, { filename: "report.pdf", contentType: "application/pdf" });
        data.append('file', fs.createReadStream(tempFilePath));        // Axios configuration for the upload
        const config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `https://api-staging.enbiosis.com/v1/kits/${kitcode}/uploadReport`,
            headers: {
                ...data.getHeaders(), // Include FormData headers
                "Authorization": `Bearer ${token2222}`,
            },
            data: data,
        };

        // Make the request to upload the PDF
        await axios.request(config)
            .then((response) => {
                res.status(200).json(response.data);
            })
            .catch((error) => {
                res.status(500).json(error);
            });
        // Respond to the client
        fs.unlinkSync(tempFilePath);


        await browser.close();

    } catch (error) {
        console.error("Error generating or uploading PDF:", error.message);
        res.status(500).json({
            error: "Failed to generate or upload PDF.",
            details: error,
        });
    }
});



module.exports = router;