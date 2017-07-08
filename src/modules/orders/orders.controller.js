import OrderModel from './orders.model'
import HTTPStatus from 'http-status'

export const newOrder = async (req, res) => {
  try {
    const orderItem = await OrderModel.create(req.body)

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

export const deleteOrder = async (req, res) => {
  try {
    const orderItem = await OrderModel.findById(req.params.id)

    await orderItem.remove()
    return res.sendStatus(HTTPStatus.OK)
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error)
  }
}

export const report = async (req, res) => {
  try {
    const report = await OrderModel.aggregate([{
      $group:
      {
        _id: { day: { $dayOfYear: "$date" }, year: { $year: "$date" } },
        totalAmount: { $sum: "$total" },
        count: { $sum: 1 }
      }
    }])

    return res.status(HTTPStatus.OK).json(report)
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error)
  }
}

export const transactions = async (req, res) => {
  try {
    const report = await OrderModel.aggregate([{
      $group:
      {
        _id: { day: { $dayOfYear: "$date" }, year: { $year: "$date" } },
        transactions: { $push: "$orderItems" },
        count: { $sum: 1 }
      }
    }])

    return res.status(HTTPStatus.OK).json(report)
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error)
  }
}