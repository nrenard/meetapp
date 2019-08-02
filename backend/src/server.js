import './config/env';

import express from 'express';
import 'express-async-errors';

import routes from './routes';
import Database from './database';

import errorHandler from './app/helpers/errorHandler';

class Server {
  constructor() {
    this.express = express();

    this.middlewares();
    this.database();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
  }

  database() {
    return new Database();
  }

  routes() {
    this.express.use(routes);
    this.express.use(errorHandler);
  }
}

export default new Server().express;
