import * as express from 'express'
import IssueController from './controllers/issue';
import * as bodyParser from 'body-parser';
import { BASE_URL } from './constants/config';
class App {
  public express;
  constructor() {
    this.express = express();
    this.mountRoutes()
  }

  private mountRoutes(): void {
    const router = express.Router();
    router.get('/', IssueController.root);
    router.post('/createissue', IssueController.createIssue);
    router.delete('/deleteissue/:issueid', IssueController.deleteIssue);
    this.express.use(bodyParser());
    this.express.use(BASE_URL, router);
  }
}

export default new App().express
