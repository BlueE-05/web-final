import express from 'express';
import UsersHandler from '../handlers/users';

const router = express.Router();
const userHandler = new UsersHandler();

// Rutas de verificación y obtención de datos del usuario
router.post('/verify', userHandler.verifyUser.bind(userHandler)); 
router.post('/userdata', userHandler.getUserData.bind(userHandler));

export default router;
