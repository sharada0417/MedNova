import express from 'express';
import { createChannelCenter, getChannelCenters } from '../application/ChannelCenter.js';

const ChannelCenterRouter = express.Router();

ChannelCenterRouter.post('/',createChannelCenter);
ChannelCenterRouter.get('/',getChannelCenters);
export default ChannelCenterRouter;