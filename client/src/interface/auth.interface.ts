export interface IRegistration {
   readonly username: string,
   readonly email: string,
   readonly password: string
}

export interface ILogin {
   readonly email: string,
   readonly password: string
}

export interface ITokenPair {
   readonly username: string,
   readonly accessToken: string,
   readonly refreshToken: string
}

export interface IRegistration {
   readonly username: string,
   readonly email: string,
   readonly password: string
}