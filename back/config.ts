import dotenv from "dotenv"
dotenv.config()

const config = {
    port: process.env.BACK_PORT || 3005,
    host: process.env.BACK_HOST || 'localhost',
    protocol: process.env.BACK_PROTOCOL || "http",
    api_port: process.env.API_PORT || 8545,
    api_host: process.env.API_HOST || '192.168.0.68',
    api_protocol: process.env.API_PROTOCOl || 'http',
}

export default config