#BackendRoutes Documentation.

# http://localhost:3001/api/c/

POST - Will create a new chiller in the DB
        Requires appropriate headers
        
*  key: "authorization": Fill in authorization token from redux
*  key: "chillername" : string name of chiller
*  key: "serial": The chillers Serial String to identify it.
*  key: "location": single string location of the chiller

Will return an object with an id: key and a msg: key

# http://localhost:3001/api/c/getchillers

POST - will return an array of chillers for a particular user id

headers:

* key: "authorization": your authorization token

will return an array of chillers from the db


# http://localhost:3001/api/c/recent

POST - will return an array of data for that particular chiller ID

headers:

* key: "authorization": your auth token.
* key: "chillerid": the chiller id number or the index of the chiller in the db
