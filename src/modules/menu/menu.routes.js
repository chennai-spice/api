import { Router } from 'express'
import * as Url from './menu.controller'

const menuRoute = new Router()

menuRoute.post('/', Url.addMenuItem)
menuRoute.get('/', Url.getAllMenuItems)
menuRoute.delete('/:id', Url.deleteMenu)

export default menuRoute
