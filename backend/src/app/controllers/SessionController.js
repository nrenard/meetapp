import User from '../models/User';

export default class SessionController {
  static async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(400).json({ message: 'User does not exists' });

    if (!(await user.checkPassword(password))) {
      return res.status(400).json({ message: 'Password incorrect.' });
    }

    return res.json({ token: user.generateToken() });
  }
}
