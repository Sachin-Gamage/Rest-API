**API DOCUMENTAION**
=

**Create Issue**
----
  Returns the status as a json object.

* **URL**

  /api/v1/createuser

* **Method:**

  `POST`
* **Headers:**
  Authorization : <Base Auth>
  Content-Type : application/json
  Accept: application/json

* **Request Body**

  [ Issue Data ]

* **Success Response:**

  * **Code:** 200 <br />
  * **Content:** `{"Status": "Issue Created","developerMessage":<http response> }`<br />
 
* **Error Response:**

  * **Code:** 500 <br />
  * **Content:** `{Status: 'Issue Creation Failed',error: <http error>}`

* **Sample Call:**

  ```javascript
    var data = {
    "fields": {
      "project": {
        "id": "10000"
      },
      "summary": "Issue82",
      "issuetype": {
        "id": "10000"
      },
      "labels": [
        "bugfix",
        "blitz_test"
      ],
      "description": "Sample Description",
      "fixVersions": [
      ],
      "customfield_10010": "CutomField"
    }
  }
    $.ajax({
      url: "/api/v1/createissue",
      dataType: "json",
      type : "POST",
      data: JSON.stringify(data) // Issue data
      success : function(r) {
        console.log(r);
      }
    });
  ```
--------------------
**Delete Issue**
----
  Returns the status as a json object.

* **URL**

  /api/v1/deleteissue/issueid

* **Method:**

  `POST`

* **Headers:**
Authorization : <Base Auth>
Content-Type : application/json
Accept: application/json
  
*  **URL Params**

   **Required:**
 
   `issueid=[Integer]`


* **Success Response:**

  * **Code:** 200 <br />
  * **Content:** `{"Status": "Issue Deleted"}`<br />
 
* **Error Response:**

  * **Code:** 500 <br />
  * **Content:** `{Status: 'Issue Deletion Failed',error: <http error>}`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/api/v1/deleteissue/10000",
      dataType: "json",
      type : "DELETE",
      success : function(r) {
        console.log(r);
      }
    });
  ```