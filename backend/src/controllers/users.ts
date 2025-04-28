// 3. Controller Users

import UsersService from '../db/users';
import { UserGet, isUserResponse, UserResponse } from '../types/UsersTypes';

export default class UsersController {
    private service = new UsersService();

    constructor() {}

    async verifyUser(username: string, password: string): Promise<isUserResponse> {
        const verify = await this.service.verifyUser(username, password);
        return { isUser: verify.isUser, isPassword: verify.isPassword };
    }

    async getUserData(username: string): Promise<UserResponse | null> {
        const userData = await this.service.getUserData(username);
        if (!userData) {
            return null;
        }
        return userData;
    }
}