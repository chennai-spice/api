import mongoose from 'mongoose'

const CustomerSchema = mongoose.Schema({
  name: { 
    type: String 
  },
  mobile: { 
    type: String, 
    unique: true, 
    required: [true, 'mobile is required'], 
    trim: true 
  },
  company: { type: String },
  active: { type: Boolean },
  messAmount: { type: Number },
  startDate: { type: Date },
  dueDate: { type: Date, default: null },
  messType: {
    breakfast: { type: Boolean, default: false },
    lunch: { type: Boolean, default: false },
    dinner: { type: Boolean, default: false }
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
