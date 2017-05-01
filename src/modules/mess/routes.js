import { Router } from 'express'
import * as Url from './controller'

const messRoute = new Router()

messRoute.get('/v1/mess/', Url.getCustomers)
messRoute.post('/v1/mess/', Url.addCustomers)
messRoute.get('/v1/mess/:id', Url.getCustomerById)
messRoute.post('/v1/mess/:id/:period/pay', Url.messPaymentFromCustomer)

export default messRoute
