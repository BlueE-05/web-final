// * 2. Handler Contacts

import { Request, Response, NextFunction } from 'express';
import UsersController from '../controllers/users';
import { UserGet, UserResponse, isUserResponse } from '../types/UsersTypes';

export default class UsersHandler {
    private userController: UsersController;

    constructor() {
        this.userController = new UsersController();
    }

    verifyUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user: UserGet = req.body;
            const response: isUserResponse = await this.userController.verifyUser(user.UserName, user.Password);
            res.json(response);
        } catch (error) {
            next(error);
        }
    };

    getUserData = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { UserName } = req.body;
            const userData = await this.userController.getUserData(UserName);
            res.json(userData);
        } catch (error) {
            next(error);
        }
    };
}