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