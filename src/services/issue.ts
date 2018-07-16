/**
 * 
 */
import fetch from 'node-fetch';

class IssueService {

    public createIssue(authHeader: string, body: Object): Promise<any> {
        return fetch('https://sachingamage.atlassian.net/rest/api/2/issue', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': authHeader
            }
        }).then((res) => {
            return res
        }).catch((err) => {
            return err
        });
    }

    public deleteIssue(authHeader: string, issueId: string) {
        return fetch(`https://sachingamage.atlassian.net/rest/api/2/issue/${issueId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authHeader
            }
        }).then((res) => {
            return res
        }).catch((err) => {
            return err
        });
    }
}

export default new IssueService();