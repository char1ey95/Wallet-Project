import { IUser } from './user.controller';

export default class UserRepository {
    async getUser({ userid, userpw }: IUser): Promise<{ message: string }> {
        try {
            const result = { message: "OK" }
            return result
        } catch (e) {
            throw new Error()
        }
    }
}