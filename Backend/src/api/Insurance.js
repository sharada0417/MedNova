import express from 'express';
import { createInsurance, getInsurances } from '../application/Insurance.js';

const InsuranceRouter = express.Router();

InsuranceRouter.post('/',createInsurance);
InsuranceRouter.get('/',getInsurances);

export default InsuranceRouter;