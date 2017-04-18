import { Router } from 'express'
import * as Url from './controller'

const orderRoute = new Router()

orderRoute.post('/v1/order/new', Url.newOrder)
orderRoute.get('/v1/order', Url.getAllOrders)

export default orderRoute
