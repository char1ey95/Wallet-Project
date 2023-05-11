import { Router } from 'express';
import { mainController } from './main.module';

export const mainRouter = Router()

mainRouter.get('/', (req, res, next) => mainController.getMain(req, res, next))