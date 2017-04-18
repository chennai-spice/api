import mongoose, { Schema } from 'mongoose'

const OrderSchema = new Schema({
  date: { type: Date, default: Date.now },
  total: { type: Number, default: 0 },
  paid: { type: Boolean, default: false },
  orderItems: [{
    name: { type: String },
    price: { type: Number },
    qty: { type: Number }
  }]
})

export default mongoose.model('Order', OrderSchema)
