// import messRoute from './mess/mess.routes'
import * as menu from './menu'
import * as orders from './orders'

const apiRoutes = app => {
  // app.use('/api/v1/mess', messRoute)
  app.use('/api/v1/menu', menu.menuRoute)
  app.use('/api/v1/orders', orders.orderRoute)
}

// const models = {
//   MenuModel: menu.menuModel,
//   OrderModel: orders.OrderModel
// }

// export { apiRoutes, models }

export default apiRoutes