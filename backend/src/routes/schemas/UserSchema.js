import RouterValidator from './RouterValidator';

export default class UserSchema extends RouterValidator {
  static get store() {
    const schema = {
      body: this.joi.object().keys({
        name: this.joi.string().required(),
        email: this.joi.string().required(),
        password: this.joi.string().required(),
      }),
    };

    return this.validate(schema);
  }
}
