import mongoose from 'mongoose'
import bluebird from 'bluebird'

export default (db) => {
  mongoose.Promise = bluebird
  mongoose.connect(db)
  mongoose.connection
    .once('open', () => console.info(`==> 📁  Connected to Database ${db}`))
    .on('error', (err) => console.log('Error: ', err))
}
