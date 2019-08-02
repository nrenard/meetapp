import { verifyToken } from '../helpers/token';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const { id } = await verifyToken(token);

    req.userId = id;

    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Token invalid' });
  }
};
