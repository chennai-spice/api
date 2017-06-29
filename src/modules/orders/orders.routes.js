import { Router } from 'express'
import * as Url from './orders.controller'

const orderRoute = new Router()

orderRoute.post('/', Url.newOrder)
orderRoute.get('/', Url.getAllOrders)

export default orderRoute
