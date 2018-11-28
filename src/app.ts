import * as express from 'express';
import * as bodyParser from 'body-parser';
import { SprintRoutes } from './routes/sprint-routes';

const debug = require('debug')('app');

class App {
  public app: express.Application;
  public routePrv: SprintRoutes = new SprintRoutes();

  constructor() {
    this.app = express();
    debug('Configured this application as an ExpressJS application');

    this.config();

    this.routePrv.routes(this.app);
    debug('Linked the routes to this application');
  }

  private config(): void {
    this.app.use(bodyParser.json());
    debug('Will support application/json type post data');

    this.app.use(bodyParser.urlencoded({ extended: false }));
    debug('Will support application/x-www-form-urlencoded post data');
  }
}

export default new App().app;
