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
import path from 'node:path' // make absolute path
import { testPath } from './utils/testPath.js'


const PORT=8000

// console.log(import.meta) // relative path - The directory where our current module server.js is executing code.
// const __dirname = import.meta.dirname
// console.log('CWD', process.cwd())


/*
Scrimba
const filePath = '/home/projects/s0fcj7p84c/public/index.html'

Mac
const filePath = '/Users/thomas/docs/projects/s0fcj7p84c/public/index.html'

Windows
const filePath = '\Users\thomas\docs\projects\s0fcj7p84c\public\index.html'
*/

const __dirname = import.meta.dirname

const server = http.createServer((req, res) =>{

    // res.setHeader('Access-Control-Allow-Origin', '*')
    // res.setHeader('Access-Control-Allow-Methods', 'GET')
    // //Set the status code 200 OK
    // res.statusCode = 200
    // //Set the content type to "text/html"
    // res.setHeader('Content-Type', 'text/html')
    // res.writeHead(200, {'Content-Type': 'text/html'})
    //send the HTML response
    // res.end(`<html><h1>The server is working</h1></html>`)

    const absPathToResource = path.join(__dirname,'public','index.html')
    const relPathToResource = path.join('public','index.html')

    //Prefer absolute path for stability
    console.log('absolute: ',absPathToResource) // The path to our resource - absolute path
    console.log('relative: ',relPathToResource)
    testPath(__dirname)

    res.statusCode = 200
    res.setHeader('Content-Type','text/html')
    res.end()
})


    //Listen on port 8000
    server.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
    })