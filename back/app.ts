import { Express } from "express"
import { Sequelize } from "sequelize"

class App {
    constructor(private readonly app: Express) {} 

    public mount(middleWare: any): void {
        this.app.use(middleWare)
    }

    public listen(port: number | string, sequelize: Sequelize, force: boolean): void {
        this.app.listen(port, async () => {
            await sequelize.sync({ force })
            console.log(`SERVER_PORT:${port}`)
            console.log(`SERVER START`)
        })
    }
}

export default App