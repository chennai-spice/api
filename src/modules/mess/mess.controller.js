import Mess from './mess.model'
import moment from 'moment'
import HTTPStatus from 'http-status'


export const addCustomers = async (req, res) => {
  try {
    const customer = await Mess.create(req.body)
    return res.status(HTTPStatus.CREATED).json(customer)
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e)
  }
}

export const getCustomers = async (req, res) => {
  try {
    const customers = await Mess.find({})
    return res.status(HTTPStatus.OK).json(customers)
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e)
  }
}


export const getCustomerById = async (req, res) => {
  const { id } = req.params

  try {
    const customer = await Mess.findById(id)
    return res.status(HTTPStatus.OK).json(customer)
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e)
  }

}

export const updateCustomerById = async (req, res) => {
  const { id } = req.params
  const { mobile, name, company, active, messAmount, breakfast, lunch, dinner } = req.body

  console.log(req.body)

  try {
    const customer = await Mess.findById(id)
    if (customer) {
      customer.name = name || customer.name
      customer.company = company || customer.company
      customer.active = active || customer.active
      customer.messAmount = messAmount || customer.messAmount
      customer.messType.breakfast = breakfast || customer.messType.breakfast
      customer.messType.lunch = lunch || customer.messType.lunch
      customer.messType.dinner = dinner || customer.messType.dinner
      customer.mobile = mobile || customer.mobile

      try {
        const updatedCustomer = await customer.save()
        return res.status(HTTPStatus.OK).json({ message: 'Customer Info Updated' })
      } catch (err) {
        return res.status(HTTPStatus.BAD_REQUEST).json(err)
      }
    }
  } catch (err) {
    return res.status(HTTPStatus.BAD_REQUEST).json(err)
  }
}


export const messPaymentFromCustomer = (req, res) => {

  const { id, period } = req.params
  Mess.findById(id, (err, doc) => {
    if (err) throw err
    doc.dueDate = moment(doc.dueDate ? doc.dueDate : Date.now()).add((period * 30), 'days').calendar()
    doc.payments.push({ date: Date.now(), period: period, amount: (period * doc.messAmount) })
    doc.save((err, d) => {
      if (err) throw err
      res.send(err)
    })
  })
}
