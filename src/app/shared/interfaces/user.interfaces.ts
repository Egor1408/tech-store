export interface ILoginUser {
    email: string
    password: string
    returnSecureToken?: boolean
}

export interface IFireBaseAuthRes {
    idToken: string
    expiresIn: string
}