import { Router } from 'express'
import * as Url from './orders.controller'

const orderRoute = new Router()

orderRoute.post('/', Url.newOrder)
orderRoute.get('/', Url.getAllOrders)
orderRoute.get('/report', Url.report)
orderRoute.get('/transactions', Url.transactions)
orderRoute.get('/totalbyproduct', Url.totalByProduct)
orderRoute.delete('/:id', Url.deleteOrder)

export default orderRoute
