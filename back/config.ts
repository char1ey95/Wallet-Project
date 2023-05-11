import dotenv from "dotenv"
dotenv.config()

const config = {
    port: process.env.PORT || 3005
}

export default config