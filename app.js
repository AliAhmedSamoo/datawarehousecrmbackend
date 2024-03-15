
const express = require("express");
const https = require('https');
const fs = require('fs');
const app = express();
require('./db/connection');

const cors = require('cors');
app.use(cors());


const options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.crt')
};


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => {
    const date = Date.now();
    res.send("Server is running new " + date);
});



app.use(require('./routers/staffprofiles'));

app.use(require('./routers/devices'));

app.use(require('./routers/customerprofiles'));



https.createServer(options, app).listen(1337, () => console.log("running on 1337"));

