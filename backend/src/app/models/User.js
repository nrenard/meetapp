import Sequelize, { Model } from 'sequelize';

import { generatePasswordHash, comparePassword } from '../helpers/password';
import { generateToken } from '../helpers/token';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
      },
      { sequelize },
    );

    this.addHook('beforeSave', async user => {
      if (user.password) user.password_hash = await generatePasswordHash(user.password);
    });

    return this;
  }

  checkPassword(password) {
    return comparePassword(password, this.password_hash);
  }

  generateToken() {
    return generateToken(this);
  }
}

export default User;
