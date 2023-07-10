const express = require('express')
const app = express()
const cors = require('cors');
const dbConnect = require('./config/database')
require('dotenv').config()

const PORT = process.env.PORT || 5000
app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "https://faizanak-portfolio.netlify.app/");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
    });

app.use(express.json())

const routes = require('./routes/files')
app.use('/api/contact' , routes)
dbConnect();
app.listen(PORT , ()=>{
    console.log("Port is running successfully");
})

app.get('/' , (req,res)=>{
    res.send("Running contact")
})