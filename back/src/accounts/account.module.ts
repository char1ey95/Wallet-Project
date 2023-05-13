import UserRepository from './user.repository';
import UserService from './user.service';
import UserController from './user.controller';

// 모델 주입 필요
const userRepository = new UserRepository()
const userService = new UserService({ userRepository })
export const userController = new UserController({ userService })