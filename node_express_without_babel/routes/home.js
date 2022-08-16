import express from 'express';
import { home, about } from '../controllers/home.js';
const router = express.Router();

router.get('/home', home);
router.get('/about', about);

export default router;




