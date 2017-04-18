import { Router } from 'express'
import { menuRoute, orderRoute } from './modules'

const router = new Router()

router.route('/').get((req, res) => {
  res.json({ message: 'Hello from CSR Restaurant Management System' })
})

router.use([menuRoute, orderRoute])

export default router
