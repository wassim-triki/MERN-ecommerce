require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

//middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  if (!process.env.NODE_ENV) {
    const host = `http://localhost:${8080}`;
    console.log(`Running on ${host}`);
  }
});
