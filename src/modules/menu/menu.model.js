import mongoose, { Schema } from 'mongoose'

const MenuSchema = new Schema({
  name: { type: String, unique: true },
  price: { type: Number },
  tags: [],
  createdOn: { type: Date, default: Date.now }
})

export default mongoose.model('Menu', MenuSchema)
