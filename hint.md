1) In terminal:
  npm init

In package.json: 
  "type": "module" => need to import node:http

  import http from 'node:http'

2) res.writeHead()
Basically,  write head is another method on response object 
use it to set the status code and headers such as content type

3) We need to be OS agnostic!

4) File System (FS) module
FS module uses:
    - Read files - .readFile()
    - Create files - .writeFile()
    - Update files - .appendFile()
    - Delete files - .unlink()
    - Rename files - .rename()

5) Global variables in Node.js (past and present)
const http = require('http') 

import http from 'node:http' (must have type module in package.js)

6) commonJs
console.log(__dirname)
console.log(__filename)

7) using import.meta v20+ // lastest
console.log(import.meta.dirname)
console.log(import.meta.filename)

8) ES modules before v20
import path from 'node:path'
import url from 'node:url'

const __filename = url.fileURLToPath(import.meta)
const __dirname = path.dirname(__filename)

console.log(__filename)
console.log(__dirname)


