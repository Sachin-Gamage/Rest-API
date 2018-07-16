/**
 * 
 */

import { Request, Response } from 'express';

class IssueController {
    public root(req: Request, res: Response) {
        res.status(200).json({ message: 'welcome to api' });
    }
}

export default new IssueController();

