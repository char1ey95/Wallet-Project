import { authController } from './auth.module'
import { Router } from 'express';

export const authRouter = Router()

authRouter.get('/', (req, res, next) => authController.getAuth(req, res, next))