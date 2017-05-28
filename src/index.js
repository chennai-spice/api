import express from 'express'
// import { urlRoute } from './modules'
import apiRoutes from './modules'
const { dbConfig, middlewareConfig } = require('./config')
import chalk from 'chalk'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

// database configuration
dbConfig(process.env.MONGO_URL)

// middleware configuration
middlewareConfig(app)

// routes
apiRoutes(app)

export default app
