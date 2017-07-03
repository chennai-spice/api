const mongoose = require('mongoose')
const bluebird = require('bluebird')

const Conn = db => {
  mongoose.Promise = bluebird
  mongoose.connect(db)
  mongoose.connection
    .once('open', () => console.info(`==> 📁  Connected to Database ${db}`))
    .on('error', err => console.log('Error: ', err))
}

export default Conn
