import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoute from './src/routes/user.js';
import connection from './src/config/db.js';
connection();

//middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/users', userRoute);

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  if (!process.env.NODE_ENV) {
    const host = `http://localhost:${8080}`;
    console.log(`Running on ${host}`);
  }
});
