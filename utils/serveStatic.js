/*
Challenge 4:

1. Create and export a function called 'serveStatic'. 
   It should take in the base directory as a parameter.

2. Build a path to index.html in the 'public' folder and save it to a const 'filePath'. 
   (Which node module will you need to import to do this? Which method joins the path together?)

3. Log 'filePath' to the console.
*/
import path from 'node:path'
import fs from 'node:fs/promises'
import { sendResponse } from './sendResponse.js'

/*
Challenge 1: 

- Store index.html as a buffer in a const ‘content’. 
- As this is an async process, do this inside a try/catch block.
- For now, just log the error in the catch block.
- You will need to change something to do with the function declaration. What is it?
*/

export async function serveStatic(baseDir, res, requestedPath) {
  const fileName = requestedPath || 'index.html'
  const filePath = path.join(baseDir, 'public',fileName)
  try{
    const content = await fs.readFile(filePath)
     // Determine content type based on file extension
    const ext = path.extname(filePath).toLowerCase()
    const contentTypes = {
      '.html': 'text/html',
      '.css': 'text/css',
      '.js': 'text/javascript',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.gif': 'image/gif',
      '.svg': 'image/svg+xml',
      '.ico': 'image/x-icon'
    }
    
    const contentType = contentTypes[ext] || 'application/octet-stream'
    sendResponse(res, 200,contentType, content)
  }
  catch(err)
  {
    console.log(err)
    sendResponse(res, 404, 'text/html', '<h1>404 Not Found</h1>')
  }
}



/*
Challenge 3:

- Import sendResponse() and use it to serve index.html. 
  Pass in all of the information sendResponse() is expecting.
  serveStatic() will need another param. What is it?

  Make any changes necessary in server.js and delete any unneeded code.

*/