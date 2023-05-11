import AuthRepository from './auth.repository'

interface DAuthService {
    authRepository: AuthRepository
}

export default class AuthService{
    private authRepository: AuthRepository
    constructor({ authRepository }: DAuthService){
        this.authRepository = authRepository
    }

    async getAuth(){
        try {
            const result = await this.authRepository.getAuth()
            return result
        } catch (e) {
            throw new Error()
        }
    }
}