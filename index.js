const express = require('express');
const app = express();
const cors = require('cors');
const dbConnect = require('./config/database');
require('dotenv').config();

const PORT = process.env.PORT || 5000;


app.use(cors());

// Rest of your code

app.use('/api/contact', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://faizanak-portfolio.netlify.app');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
app.use(express.json());

const routes = require('./routes/files');
app.use('/api/contact', routes);

dbConnect();

app.listen(PORT, () => {
  console.log("Port is running successfully");
});

app.get('/', (req, res) => {
  res.send("Running contact");
});
