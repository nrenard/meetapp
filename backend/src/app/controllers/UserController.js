import User from '../models/User';

export default class UserController {
  static async store(req, res) {
    const { email } = req.body;
    const userExists = await User.findOne({ where: { email } });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    const user = await User.create(req.body);

    return res.json({ user, token: user.generateToken() });
  }
}
