export interface UserDB {
    UserName: string;
    Name: string;
    Password: string;
    FavBooks: string;
}

export interface isUserResponse {
    isUser: boolean;
    isPassword: boolean;
}

export interface UserResponse {
    Name: string;
    FavBook: string;
}

export interface UserGet {
    UserName: string;
    Password: string;
}