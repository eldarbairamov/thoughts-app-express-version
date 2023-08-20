export interface ILogin {
   readonly email: string,
   readonly password: string
}

export interface IRegistration {
   readonly username: string,
   readonly email: string,
   readonly password: string
}

export interface IRefresh {
   readonly refreshToken: string
}

export interface ISuccessLogin {
   readonly username: string,
   readonly accessToken: string,
   readonly refreshToken: string
}