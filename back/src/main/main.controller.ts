import { Request, Response, NextFunction } from "express"
import MainService from './main.service'

interface DMainController {
    mainService: MainService
}

export default class MainController {
    private mainService: MainService
    constructor({ mainService }: DMainController){
        this.mainService = mainService
    }
    async getMain(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const result = await this.mainService.getMain()
            res.json(result)
        } catch (e) {
            next(e)
        }
    }
}