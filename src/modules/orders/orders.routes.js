import { Router } from 'express'
import * as Url from './orders.controller'

const orderRoute = new Router()

orderRoute.post('/', Url.newOrder)
orderRoute.get('/', Url.getAllOrders)
orderRoute.delete('/:id', Url.deleteOrder)

export default orderRoute
