#BackendRoutes Documentation.

#http://localhost:3001/api/c/

POST - Will create a new chiller in the DB
        Requires appropriate headers
        
*  key: "authorization": Fill in authorization token from redux
*  key: "serial": The chillers Serial String to identify it.
*  key: "location": single string location of the chiller

Will return an object with an id: key and a msg: key


