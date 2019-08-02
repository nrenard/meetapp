import { Router } from 'express';

import authMiddleware from '../app/middlewares/auth';

import users from './users';
import session from './session';

const routes = new Router();

routes.use('/users', users);
routes.use('/session', session);

routes.use('/meetapps', authMiddleware, (req, res) => res.json({ message: 'So logado rapaiz' }));

routes.use('*', (req, res) => res.status(400).send('Not found.'));

export default routes;
