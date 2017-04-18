import { Router } from 'express'
import * as Url from './controller'

const menuRoute = new Router()

menuRoute.post('/v1/menu/new', Url.addMenuItem)
menuRoute.get('/v1/menu', Url.getAllMenuItems)

export default menuRoute
