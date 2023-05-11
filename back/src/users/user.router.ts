import { userController } from './user.module';
import { Router } from 'express';

export const userRouter = Router()

userRouter.get('/', (req, res, next) => userController.getUser(req, res, next))