
const express = require("express");
const cors = require("cors");
const app = express();
require('./db/connection');
const axios = require('axios');





app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    const date = Date.now();
    res.send("Server is running " + date);
});



app.use(require('./routers/staffprofiles'));

app.use(require('./routers/devices'));

app.use(require('./routers/customerprofiles'));




app.listen(1337, () => console.log("running on 1337"));

