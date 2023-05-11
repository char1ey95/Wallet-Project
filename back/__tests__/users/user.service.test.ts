import { IUser } from '@users/user.controller'
import UserRepository from '@users/user.repository'
import UserService from '@users/user.service'

describe('UserService', () => {
    let userService: UserService
    let userRepository: UserRepository

    beforeEach(() => {
        userRepository : {
            getUser: jest.fn().mockResolvedValue({ message: "OK"})
        }

        userService = new UserService({ userRepository })
    })

    describe('getUser', () => {
        const userinfo : IUser = {
            userid: "char1ey",
            userpw: "web7722!!"
        }
        const result = userService.getUser(userinfo)
        console.log(result)
    })
})