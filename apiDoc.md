**API DOCUMENTAION**
=

**Create Issue**
----
  Returns the status as a string.

* **URL**

  /api/v1/createuser

* **Method:**

  `POST`
<!--   
*  **URL Params**

   **Required:**
 
   `id=[integer]` -->

* **Data Params**

  [ Issue Data ]

* **Success Response:**

  * **Code:** 200 <br />
  * **Content:** `{"message": "Issue Created"}`<br />
 
* **Error Response:**

  * **Code:** 500 <br />
  * **Content:** `{message: 'Issue Creation Failed',error: <http error>}`

* **Sample Call:**

  ```javascript
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
  Returns the status as a string.

* **URL**

  /api/v1/deleteissue/issueid

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `issueid=[Integer]`


* **Success Response:**

  * **Code:** 200 <br />
  * **Content:** `{"message": "Issue Deleted"}`<br />
 
* **Error Response:**

  * **Code:** 500 <br />
  * **Content:** `{message: 'Issue Deletion Failed',error: <http error>}`

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