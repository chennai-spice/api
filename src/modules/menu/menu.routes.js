import { Router } from 'express'
import * as Url from './menu.controller'

const menuRoute = new Router()

menuRoute.post('/', Url.addMenuItem)
menuRoute.get('/', Url.getAllMenuItems)
menuRoute.get('/:id', Url.getMenuItemById)
menuRoute.delete('/:id', Url.deleteMenu)
menuRoute.patch('/:id', Url.updateMenu)

export default menuRoute
