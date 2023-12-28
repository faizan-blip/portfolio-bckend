const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
  allowedHeaders: 'Content-Type,Authorization',
};

// Apply CORS middleware to all routes
app.use(cors(corsOptions));
app.use(express.json());

const routes = require('./routes/files');
app.use('/api', routes);


app.listen(PORT, () => {
  console.log("Port is running successfully");
});

app.get('/', (req, res) => {
  res.send("Running contact");
});
