import express from 'express'
// import { urlRoute } from './modules'
import apiRoutes from './routes'
import { dbConfig, middlewareConfig } from './config'
import chalk from 'chalk'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

// database configuration
dbConfig(process.env.MONGO_URL)

// middleware configuration
middlewareConfig(app)

app.use('/api', apiRoutes)

app.listen(process.env.PORT, (err) => {
  if (err) return console.error(err)
  console.log(chalk.white.bgBlue('Server Starting'))
  console.info(`==> 🌎  ENV=${process.env.NODE_ENV}`)
  console.info(`==> ✅  Server is listening at http://localhost:${process.env.PORT}`)
})
