import express  from 'express';
import dotenv from "dotenv";
import ConnectDB from './infrastructure/db.js'
import userrouter from './api/user.js';

dotenv.config();
const app = express();
app.use(express.json());
ConnectDB();

app.use("/users",userrouter);

const PORT = 5000;
app.listen(5000,
    console.log(`Sever is running on port ${PORT}`)
);