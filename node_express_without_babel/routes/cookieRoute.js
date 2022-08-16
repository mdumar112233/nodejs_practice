import express from 'express';
import { delete_cookie, get_cookie, set_cookie } from '../controllers/cookieController.js';

const router = express.Router();


router.get('/setcookie', set_cookie);
router.get('/getcookie', get_cookie);
router.get('/deletecookie', delete_cookie);

export default router;
