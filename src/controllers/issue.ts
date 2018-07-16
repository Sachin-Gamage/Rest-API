/**
 * Controller class
 */

import { Request, Response, json } from 'express';
import IssueService from '../services/issue';

class IssueController {
    public root(req: Request, res: Response) {
        res.status(200).json({ message: 'welcome to api' });
    }

    public createIssue(req: Request, res: Response) {
        return IssueService.createIssue(req.headers['authorization'], req.body).then(response => {
            res.status(200).json(response);
        }).catch((error) => {
            res.status(500).json(error);
        });
    }

    public deleteIssue(req: Request, res: Response) {
        return IssueService.deleteIssue(req.headers['authorization'], req.params.issueid).then(response => {
            res.status(200).json(response);
        }).catch((error) => {
            res.status(500).json(error);
        });;
    }
}

export default new IssueController();

