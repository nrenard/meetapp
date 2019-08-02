import { sign, verify } from 'jsonwebtoken';

export const generateToken = ({ id }) => sign({ id }, process.env.SECRET, {
  expiresIn: '7d',
});

export const verifyToken = token => verify(token, process.env.SECRET);
