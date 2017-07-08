import 'babel-polyfill'

import express from 'express'
// import { urlRoute } from './modules'
// import { apiRoutes, models } from './modules'
import apiRoutes from './modules'
const { dbConfig, middlewareConfig } = require('./config')
import chalk from 'chalk'
import dotenv from 'dotenv'
import path from 'path'

if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: path.join(__dirname, '../.development.env') })
} else if (process.env.NODE_ENV === 'production-test') {
  dotenv.config({ path: path.join(__dirname, '../.production.env') })
}

const app = express()

// database configuration
dbConfig(process.env.MONGODB_URI)

// middleware configuration
middlewareConfig(app)

// Models
// models()

// routes
apiRoutes(app)

app.listen(process.env.PORT, () => {
  console.info(`==> 🌎  ENV=${process.env.NODE_ENV}`)
  console.info(
    `==> ✅  Server is listening at http://localhost:${process.env.PORT}`
  )
})
