import { Request, Response, NextFunction } from 'express';
import UsersController from '../controllers/users';
import { UserGet, UserResponse, isUserResponse } from '../types/UsersTypes';

export default class UsersHandler {
    private userController: UsersController;

    constructor() {
        this.userController = new UsersController();
    }

    // Método para verificar el usuario y la contraseña
    verifyUser = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        try {
            const user: UserGet = req.body;
            const response: isUserResponse = await this.userController.verifyUser(user.UserName, user.Password);
    
            // Regresar directamente la respuesta de isUser e isPassword
            return res.json(response);
    
        } catch (error) {
            next(error);
        }
    };

    // Método para obtener los datos del usuario (nombre y libro favorito)
    getUserData = async (req: Request, res: Response, next: NextFunction):Promise<any> => {
        try {
            const { UserName } = req.body;
            const userData = await this.userController.getUserData(UserName);

            if (userData) {
                return res.json(userData);
            }

            return res.status(404).json({ error: 'Usuario no encontrado' });

        } catch (error) {
            next(error);
        }
    };
}
