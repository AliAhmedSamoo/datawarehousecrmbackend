
const express = require("express");
const https = require('https');
const fs = require('fs');
const app = express();
require('./db/connection');
const stripe = require("stripe")("sk_test_51OAUNPI8F77lsrpTc1y3biakMLcJmkheuZSkFFroaRyiXnIhqrSjWSXQbuwYmjZaTZqSpDaby74mejxhfG8FpV1A001eCUBn04");
const cors = require('cors');
const nodemailer = require("nodemailer");
const { default: axios } = require("axios");
app.use(cors());


const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/backend.datawarehousegh.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/backend.datawarehousegh.com/fullchain.pem'),
};


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => {
   const date = Date.now();
   res.send("Server is running new " + date);
});



const contentStore = {}; // Temporary in-memory storage (use a database for production)


app.post("/create-checkout-session", async (req, res) => {
    try {

        const { product, htmlContent, email } = req.body;
        console.log(htmlContent.length);


        const id = Date.now().toString(); // Unique identifier
        contentStore[id] = htmlContent;

        if (!product || !product.breakdown) {
            return res.status(400).json({ error: "Product data or breakdown is missing" });
        }

        // Map breakdown to Stripe line items
        const lineItems = product.breakdown.map((item) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.name, // Use the name of the breakdown item
                },
                unit_amount: Math.round(item.price * 100), // Amount in cents
            },
            quantity: 1,
        }));

        // Create a Stripe Checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: `https://backend.datawaregh.com:1337/aksjkdhksjadhfkjd?id=${id}&email=${email}`,
            cancel_url: "https://akwaabaconnect.com/order.html?",
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error("Error creating Stripe session:", error.message);
        res.status(500).json({ error: error.message });
    }
});



app.get("/aksjkdhksjadhfkjd", async (req, res) => {
    const { id, email } = req.query;

    // if (!contentStore[id]) {
    //     return res.status(404).send("Content not found");
    // }

    const htmlContent = contentStore[id];
    const emailTo = email


    const refreshToken = "1//04WIYGnawGTDhCgYIARAAGAQSNwF-L9IrUkAksQfTQPtsUKLIsxcp5UHxPJs9ZstWAMCi3KJd2bjjafsrWFvGMxYEmDrKHwU1Y10";
    const clientId = "1045553898753-ulqhbo0gr67sspn1d66a0ouoqlrua9hb.apps.googleusercontent.com";
    const clientSecret = "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";
    const bccRecipients = ["datawarehouseghana@gmail.com","aliahmed.samoo.1@gmail.com"];

    const emailSubject = "Akwaaba Connect order";
    const emailBody = htmlContent;
    var accessToken = ""


    try {

        const response = await axios.post('https://accounts.google.com/o/oauth2/token', null, {
            params: {
                client_id: clientId,
                client_secret: clientSecret,
                refresh_token: refreshToken,
                grant_type: 'refresh_token'
            }
        });

        accessToken = response.data.access_token


        const senderName = "Akwaba order";
        const emailFrom = "datawarehouseghana@gmail.com"; // Replace with the actual sender's email address

        const message = `Subject: ${emailSubject}\nFrom: ${senderName} <${emailFrom}>\nTo: ${emailTo}\nBcc: ${bccRecipients.join(", ")}\nContent-Type: text/html; charset="UTF-8"\n\n${emailBody}`;
        const encodedMessage = Buffer.from(message).toString('base64');

        await axios.post('https://www.googleapis.com/gmail/v1/users/me/messages/send', {
            raw: encodedMessage
        }, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });
    }
    catch (err) {
        console.log(err)
    }






    const redirectUrl = `https://akwaabaconnect.com`;
    res.redirect(redirectUrl);
});




app.use(require('./routers/staffprofiles'));

app.use(require('./routers/devices'));

app.use(require('./routers/ygm'));

app.use(require('./routers/customerprofiles'));
app.use(require('./routers/post'));
app.use(require('./routers/Finance'));

app.use(require('./routers/others'));

https.createServer(options, app).listen(1337, () => console.log("running on 1337"));

