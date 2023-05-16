import { Express } from "express"

class App {
    constructor(private readonly app: Express) {} 

    public mount(middleWare: any): void {
        this.app.use(middleWare)
    }

    public listen(port: number | string): void {
        this.app.listen(port, () => {
            console.log(`SERVER_PORT:${port}`)
            console.log(`SERVER START`)
        })
    }
}

export default App