// * 4. DB Contact

import { UserDB, isUserResponse, UserResponse, UserGet } from '../types/UsersTypes';

export default class CalculationsService {
    private users: UserDB[] = [
        { UserName: 'user1', Name: 'User One', Password: 'password1', FavBooks: 'Lord of the Rings' },
        { UserName: 'ana.t', Name: 'Ana Torres', Password: 'libro123', FavBooks: 'Cien Años de Soledad' },
        { UserName: 'marco.r', Name: 'Marco Ramírez', Password: 'lectura456', FavBooks: 'El Principito' },
        { UserName: 'sofia.m', Name: 'Sofía Morales', Password: 'novela789', FavBooks: 'Orgullo y Prejuicio' }
    ];

    constructor() {}

    async verifyUser(username: string, password: string): Promise<isUserResponse> {
        const res: isUserResponse = { isUser: false, isPassword: false };

        const foundUser = this.users.find(u => u.UserName === username);
        if (foundUser) {
            res.isUser = true;
            if (foundUser.Password === password) {
                res.isPassword = true;
            }
        }
        return res;
    }

    async getUserData(username: string): Promise<UserResponse | null> {
        const foundUser = this.users.find(u => u.UserName === username);
        if (foundUser) {
            return { Name: foundUser.Name, FavBook: foundUser.FavBooks };
        }
        return null;
    }
}