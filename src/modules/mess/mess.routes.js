import { Router } from 'express'
import * as Url from './mess.controller'
import { customer } from './mess.validations'
import { joiValidate } from 'express-joi'


const routes = new Router()

routes.get('/', Url.getCustomers)
routes.post('/', joiValidate(customer), Url.addCustomers)
routes.get('/:id', Url.getCustomerById)
routes.put('/:id', Url.updateCustomerById)
routes.post('/:id/:period/pay', Url.messPaymentFromCustomer)

export default routes
