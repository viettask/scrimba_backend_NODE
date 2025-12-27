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
    
