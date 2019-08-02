import RouterValidator from './RouterValidator';

export default class SessionSchema extends RouterValidator {
  static get store() {
    const schema = {
      body: this.joi.object().keys({
        email: this.joi.string().required(),
        password: this.joi.string().required(),
      }),
    };

    return this.validate(schema);
  }
}
