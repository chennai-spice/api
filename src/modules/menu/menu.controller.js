import MenuModel from './menu.model'

export const addMenuItem = (req, res) => {
  const menuItem = new MenuModel(req.body)

  menuItem.save()
    .then(doc => res.json(doc))
    .catch(err => res.json(err))
}

export const getAllMenuItems = (req, res) => {
  MenuModel.find({}).exec((err, doc) => {
    if (err) throw err
    res.json(doc)
  })
}
