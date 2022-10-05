import User from '../models/User.js'

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body
    const object = await User.create({ name, email, password })

    res.status(200).send(object)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
