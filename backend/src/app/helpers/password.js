import { hash, compare } from 'bcryptjs';

export const generatePasswordHash = async password => {
  const passwordHash = await hash(password, 10);
  return passwordHash;
};

export const comparePassword = async (password, passwordHash) => compare(password, passwordHash);
