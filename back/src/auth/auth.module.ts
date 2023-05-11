import AuthService from './auth.service';
import AuthController from './auth.controller';
import AuthRepository from './auth.repository';

// 모델 주입 필요
const authRepository = new AuthRepository()
const authService = new AuthService({ authRepository })
export const authController = new AuthController({ authService })