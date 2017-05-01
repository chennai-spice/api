import mongoose from 'mongoose'

const CustomerSchema = mongoose.Schema({
  name: { type: String },
  mobile: { type: String },
  company: { type: String },
  active: { type: Boolean },
  messAmount: { type: Number },
  startDate: { type: Date },
  dueDate: { type: Date, default: null },
  messType: {
    breakfast: { type: Boolean },
    lunch: { type: Boolean },
    dinner: { type: Boolean }
  },
  payments: [
    {
      date: { type: Date },
      period: { type: Number, default: 1 },
      amount: { type: Number }
    }
  ]

})

export default mongoose.model('Customer', CustomerSchema, 'customers')
