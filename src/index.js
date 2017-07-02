import 'babel-polyfill'

import express from 'express'
// import { urlRoute } from './modules'
import apiRoutes from './modules'
const { dbConfig, middlewareConfig } = require('./config')
import chalk from 'chalk'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

// database configuration
dbConfig(process.env.MONGO_URI)

// middleware configuration
middlewareConfig(app)

// routes
apiRoutes(app)

app.listen(process.env.PORT, () => {
  console.info(`==> 🌎  ENV=${process.env.NODE_ENV}`)
  console.info(
    `==> ✅  Server is listening at http://localhost:${process.env.PORT}`
  )
})
