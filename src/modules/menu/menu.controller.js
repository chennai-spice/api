import MenuModel from './menu.model'
import HTTPStatus from 'http-status'

export const addMenuItem = (req, res) => {
  let { tags } = req.body
  req.body.tags = tags.split(',').map(item => item.trim())
  const menuItem = new MenuModel(req.body)
  menuItem.save().then(doc => res.json(doc)).catch(err => res.json(err))
}

export const getAllMenuItems = (req, res) => {
  MenuModel.find({}).exec((err, doc) => {
    if (err) throw err
    res.json(doc)
  })
}

export const getMenuItemById = async (req, res) => {
  try {
    const menuItem = await MenuModel.findById(req.params.id)
    return res.status(HTTPStatus.OK).json(menuItem)
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error)
  }
}

export const deleteMenu = async (req, res) => {
  try {
    const menuItem = await MenuModel.findById(req.params.id)

    await menuItem.remove()
    return res.sendStatus(HTTPStatus.OK)
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error)
  }
}

export const updateMenu = async (req, res) => {
  try {
    const menuItem = await MenuModel.findById(req.params.id)

    Object.keys(req.body).forEach(key => {
      menuItem[key] = req.body[key]
    })

    return res.status(HTTPStatus.OK).json(await menuItem.save())
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).json(error)
  }
}
