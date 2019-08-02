import { Router } from 'express';

import UserSchema from './schemas/UserSchema';

import UserController from '../app/controllers/UserController';

const routes = new Router();

routes.post('/', UserSchema.store, UserController.store);

export default routes;
