/**
 * Service Class
 */

import fetch from 'node-fetch';
import { JIRA_ENDPOINT } from '../constants/config';

class IssueService {

    public createIssue(authHeader: string, body: Object): Promise<any> {
        return fetch(`${JIRA_ENDPOINT}/rest/api/2/issue`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': authHeader
            }
        }).then((res) => {
            return res.json();
        }).catch((err) => {
            return err.json();
        });
    }

    public deleteIssue(authHeader: string, issueId: string) {
        return fetch(`${JIRA_ENDPOINT}/rest/api/2/issue/${issueId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': authHeader
            }
        }).then((res) => {
            return res;
        }).catch((err) => {
            return err;
        });
    }
}

export default new IssueService();