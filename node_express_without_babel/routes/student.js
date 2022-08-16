import express from 'express';
import { getMethod } from '../controllers/student.js';

const router = express.Router();

router.get('/', getMethod)

export default router;













