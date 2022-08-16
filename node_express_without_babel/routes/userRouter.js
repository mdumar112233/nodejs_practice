import express from 'express';
import { login, loginHome, signUp } from '../controllers/userController.js';

const router = express.Router();

router.get('/user', loginHome);
router.get('/login', login);
router.get('/signUp', signUp);

export default router;

