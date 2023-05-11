import MainController from './main.controller';
import MainService from './main.service';
import MainRepository from './main.repository';

// 모델 주입 필요
const mainRepository = new MainRepository()
const mainService = new MainService({ mainRepository })
export const mainController = new MainController({ mainService })

