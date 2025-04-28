//* 1. Routes Users

import express from 'express';
import UsersHandler from '../handlers/users';

const router = express.Router();
const userHandler = new UsersHandler();

router.get('/verify', userHandler.verifyUser);
router.get('/userdata', userHandler.getUserData);

export default router;
//verificar user
//regresar nombre completo del user y libro favoritp o error