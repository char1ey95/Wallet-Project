import MainRepository from './main.repository'

interface DMainService {
    mainRepository: MainRepository
}

export default class MainService{
    private mainRepository: MainRepository
    constructor({ mainRepository }: DMainService){
        this.mainRepository = mainRepository
    }

    async getMain(): Promise<void> {
        try {
            const result = await this.mainRepository.getMain()
            return result
        } catch (e) {
            throw new Error()
        }
    }
}