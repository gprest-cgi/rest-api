import { Request, Response } from 'express';

const debug = require('debug')('app:routing');

export class SprintRoutes {
  public routes(app): void {
    app.route('/').get((req: Request, res: Response) => {
      const msg = 'GET request recieved on /';
      debug(msg);
      res.status(200).send({
        message: msg
      });
    });
  }
}
