1) res.writeHead() vs res.setHeader()
What's the difference?

res.setHeader() 
    - Sets a response header but doesn't send it immediately.
    - Allows you to set or modify headers individually, at any point before sending the response

res.writeHeader()
    - Sends any headers immediately
    - No further modification is possible.

=> Potential problems
    - A header set using setHeader() after writeHead() will not be included in the response. So fix like that:
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Methods', 'GET')
        res.writeHead(200, {'Content-Type': 'text/html'})
    - A header set using setHeader() can be overruled by a header set with writeHead() 
    It means: 
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.writeHead(200, {'Content-Type': 'text/html', 'Access-Control-Allow-Methods': 'POST'}) -> header trong writeHead được ưu tiên

2) import.meta is an object specific to the modular JS environment, 
which provides metadata about the current module.

3) Current Working Directory (CWD)
The current working directory (CWD) is the folder you're in when you run your 
Node.js app.
Typically with a command like: node server.js

4) Absolute Paths
    - Show the full location of a file or folder on the system where your code is running
    - always the same, no matter where you run you main script server.js in our case
    - Independent of the current working directory (CWD)

5) Relative Paths
    - Relative to the file it appears in 
    - Often include . (current folder) or .. (up one folder)
    - We often see this in import statements

6) Relative paths created with path module
    - Star from the Current Working Directory
    - Are therefore affected by changes to the CWD
    - That means they are not as safe, but sometimes more flexible

7) Path Module
    - Join path elements to create one path (absolute or relative) 
    which will work on any supported OS
    - Extract file names and extensions.
    