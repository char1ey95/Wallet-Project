import { Request, Response, NextFunction } from 'express';
import AuthService from './auth.service';

interface DAuthController {
    authService: AuthService
}

export default class AuthController{
    private authService: AuthService
    constructor({ authService }: DAuthController){
        this.authService = authService
    }
    
    async getAuth(req: Request, res: Response, next: NextFunction){
        try {
            const result = await this.authService.getAuth()
            res.json(result)
        } catch (e) {
            next(e)
        }
    }
}