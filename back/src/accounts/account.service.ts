import { IUser } from './user.controller'
import UserRepository from './user.repository'

interface DUserService {
    userRepository: UserRepository
}

export default class UserService {
    private userRepository
    constructor({ userRepository }: DUserService) {
        this.userRepository = userRepository
    }

    // 타입선언필요
    async getUser({ userid, userpw }: IUser ) {
        try {
            // result 타입선언 필요
            const result = await this.userRepository.getUser({ userid, userpw })
            return result
        } catch (e) {
            throw new Error()
        }
    }
}