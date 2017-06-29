import OrderModel from './orders.model'
import HTTPStatus from 'http-status'
// import print from '../../services/print-receipt'

export const newOrder = async (req, res) => {
  try {
    const orderItem = await OrderModel.create(req.body)
    // print(orderItem)

    return res.status(HTTPStatus.CREATED).json(orderItem)
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error)
  }
}

export const getAllOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find({})
    res.status(200).send(orders)
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error)
  }
}
