const express = require("express");
const fs = require("fs");
const path = require('path');
const home = fs.readFileSync("home.html");

const app = express();

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'home.html'));
    
});

app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,"contact.html"));
});

app.get('/service',(req,res)=>{
    res.sendFile(path.join(__dirname,"service.html"));
});

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,"login.html"));
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});




































