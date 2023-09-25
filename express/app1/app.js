const express = require("express");
const fs = require("fs");
const path = require('path');
//const home = fs.readFileSync("home.html");

const app = express();

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'home.html'));
    
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});




































