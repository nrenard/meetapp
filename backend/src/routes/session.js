import { Router } from 'express';

import SessionSchema from './schemas/SessionSchema';

import SessionController from '../app/controllers/SessionController';

const routes = new Router();

routes.post('/', SessionSchema.store, SessionController.store);

export default routes;
