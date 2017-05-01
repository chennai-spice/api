import MessModel from './model'
import moment from 'moment'

export const addCustomers = (req, res) => {
  const {
    name,
    mobile,
    company,
    messAmount,
    breakfast,
    lunch,
    dinner
  } = req.body

  var newCst = new MessModel({
    name: name,
    mobile: mobile,
    company: company,
    active: true,
    messAmount: messAmount,
    startDate: Date.now(),
    messType: {
      breakfast: breakfast,
      lunch: lunch,
      dinner: dinner
    }
  })

  newCst.save()
    .then(doc => res.json(doc))
    .catch(err => res.json(err))
}

export const getCustomers = (req, res) => {
  MessModel.find({}).exec((err, doc) => {
    if (err) throw err
    res.json(doc)
  })
}


export const getCustomerById = (req, res) => {
  const { id } = req.params
  MessModel.findById(id).exec((err, doc) => {
    if (err) throw err
    res.json(doc)
  })
}


export const messPaymentFromCustomer = (req, res) => {

  const { id, period } = req.params
  MessModel.findById(id, (err, doc) => {
    if (err) throw err
    doc.dueDate = moment(doc.dueDate ? doc.dueDate : Date.now()).add((period * 30), 'days').calendar()
    doc.payments.push({ date: Date.now(), period: period, amount: (period * doc.messAmount) })
    doc.save((err, d) => {
      if (err) throw err
      res.send(err)
    })
  })
}
