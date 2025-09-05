import express  from 'express';
import dotenv from "dotenv";
import ConnectDB from './infrastructure/db.js'
import userrouter from './api/user.js';
import appointmentRouter from './api/Appointement.js';
import LabRouter from './api/Lab.js'
import InsuranceRouter from './api/Insurance.js';
import ChannelCenterRouter from './api/ChannelCenter.js';

dotenv.config();
ConnectDB();
const app = express();

app.use(express.json());
app.use("/tests",LabRouter)
app.use("/users",userrouter);
app.use("/appointments", appointmentRouter);
app.use("/insurance",InsuranceRouter);
app.use('/channelcenter',ChannelCenterRouter);

const PORT = 5000;
app.listen(5000,
    console.log(`Sever is running on port ${PORT}`)
);