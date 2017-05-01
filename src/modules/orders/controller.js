import OrderModel from './model'
export const newOrder = (req, res) => {
  const orderItem = new OrderModel(req.body)
  orderItem.save()
    .then(doc => {
      res.json(doc)
    })
    .catch(err => res.json(err))
}

export const getAllOrders = (req, res) => {
  OrderModel.find({}).exec((err, doc) => {
    if (err) throw err
    // res.status(200).json(doc)
    res.status(200).send('hello')
  })
}
