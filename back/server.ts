import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import App from './app'
import config from './config'
import router from '@server/router'
import sequelize from "./model"

const app = express()
const server = new App(app)

server.mount(cors({ origin: true, credentials: true }))
server.mount(cookieParser())
server.mount(express.json())
server.mount(router)

server.listen(config.port, sequelize, false)