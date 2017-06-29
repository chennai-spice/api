// import messRoute from './mess/mess.routes'
import menuRoute from './menu/menu.routes'
import ordersRoute from './orders/orders.routes'

export default app => {
  // app.use('/api/v1/mess', messRoute)
  app.use('/api/v1/menu', menuRoute)
  app.use('/api/v1/orders', ordersRoute)
}
