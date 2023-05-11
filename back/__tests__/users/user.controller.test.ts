import UserController from "@users/user.controller"
import UserRepository from '@users/user.repository'
import UserService from '@users/user.service'

describe('UserController', () => {
    let userRepository: UserRepository
    let userService: UserService
    let userController: UserController
    
    beforeEach(() => {
        // userRepository = new UserRepository()
        // userService = new UserService({ userRepository })
        userService = {
            getUser: jest.fn().mockResolvedValue({message: "OK"})
        }
        userController = new UserController({ userService })
    })

    describe('getUser', () => {
        it('getUser에 id와 password가 변수에 잘 담기는가', () => {
            // const req: Request = {
            //     body: {
            //         userid: "char1ey",
            //         userpw: "web7722!"
            //     }
            // }

            // userController.getUser(req)
        })
    })
})