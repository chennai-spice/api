import express from 'express'
// import { urlRoute } from './modules'
import apiRoutes from './modules'
const { dbConfig, middlewareConfig } = require('./config')
import chalk from 'chalk'
import dotenv from 'dotenv'

dotenv.config()
dbConfig(process.env.MONGO_URL)

const app = express()

// database configuration

// middleware configuration
middlewareConfig(app)

apiRoutes(app)

// app.listen(process.env.PORT, (err) => {
//   if (err) return console.error(err)

//   if (process.env.NODE_ENV !== 'test') {
//     console.log(chalk.white.bgBlue('Server Starting'))
//     console.info(`==> 🌎  ENV=${process.env.NODE_ENV}`)
//     console.info(`==> ✅  Server is listening at http://localhost:${process.env.PORT}`)
//   }
// })

export default app
