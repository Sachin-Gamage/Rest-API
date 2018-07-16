import * as express from 'express'
import IssueController from './controllers/issue';
class App {
  public express: express;
  constructor() {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes(): void {
    const router = express.Router();
    router.get('/', IssueController.root)
    this.express.use('/', router)
  }
}

export default new App().express
