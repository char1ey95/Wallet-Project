import { Request, Response, NextFunction } from 'express';
import UserService from './user.service';

interface DUserController {
    userService: UserService
}

export interface IUser {
    userid: string
    userpw: string
}

interface IRequest extends Request {
    body : IUser
}

export default class UserController{
    private readonly userService
    constructor({ userService }: DUserController) {
        this.userService = userService
    }
    async getUser(req: IRequest, res: Response, next: NextFunction){
        try {
            const { userid, userpw } = req.body
            const result = await this.userService.getUser( { userid, userpw } as IUser)
            res.json(result)
        } catch (e) {
            next(e)
        }
    }
}