import dotenv from "dotenv"
dotenv.config()

const config = {
    port: process.env.BACK_PORT || 3005,
    host: process.env.BACK_HOST || 'localhost',
    protocol: process.env.BACK_PROTOCOL || "http",
    api_port: process.env.API_PORT || 8545,
    api_host: process.env.API_HOST || 'localhost',
    api_protocol: process.env.API_PROTOCOl || 'http',
    db: {
        development: {
            username: process.env.DB_USER || "root",
            password: process.env.DB_PASSWORD || "Rkd08217!",
            database: process.env.DB_DATABASE || "Wallet",
            port: process.env.DB_PORT || 3306,
            host: process.env.DB_HOST || "localhost",
            dialect: "mysql",
            timezone: "Asia/Seoul",
            dialectOptions: {
                dataStrings: true,
                typeCast: true,
            },
            define: { freezeTableName: true, timestamp: false },
        }
    }
}

export default config