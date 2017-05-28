import { Router } from 'express'
import * as Url from './mess.controller'

const messRoute = new Router()

messRoute.get('', Url.getCustomers)
messRoute.post('', Url.addCustomers)
messRoute.get('/:id', Url.getCustomerById)
messRoute.put('/:id', Url.updateCustomerById)
messRoute.post('/:id/:period/pay', Url.messPaymentFromCustomer)

export default messRoute
