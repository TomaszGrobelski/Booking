import express from 'express';

import UserController from '../controllers/UserController.js';
import authenticateToken from '../middleware/authenticateToken.js';

const router = express.Router();

router.post('/login', UserController.login);
router.post('/register', UserController.register);
router.get('/user-info', authenticateToken, UserController.getUserInfo);
router.post('/changePassword', authenticateToken, UserController.changePassword);
router.get('/check-auth', authenticateToken, UserController.checkAuth);
router.post('/logout', UserController.logout);

export default router;
