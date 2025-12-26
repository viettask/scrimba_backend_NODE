/*
Challenge 1: 
1. Initialise a nodejs project:
	Name: “from-the-other-side”.
    Description: “A platform for sharing ghostly encounters”.

2. Enable modular js (in package.json).

hint.md for help
*/

/*
Challenge 2: 

1.Set up a server that serves the string 
    '<html><h1>The server is working</h1></html>'.
    
    What should the content type be? 
    What status code should you send?

2. Listen on port 8000 and log a connection message to the console.

3. Open the browser to see your first served HTML.

*/

import http from 'node:http'

const PORT=8000

const server = http.createServer((req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    // //Set the status code 200 OK
    // res.statusCode = 200
    // //Set the content type to "text/html"
    // res.setHeader('Content-Type', 'text/html')
    res.writeHead(200, {'Content-Type', 'text/html'})
    //send the HTML response
    res.end(`<html><h1>The server is working</h1></html>`)
})


    //Listen on port 8000
    server.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
    })