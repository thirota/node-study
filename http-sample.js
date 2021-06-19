const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
    res.writeHead(200, { 'Context-type' : 'text/plain'} )
    res.write('Hello, world!')
    res.end()
})

server.on('listening', () => {
    // ...
})

server.on('error', () => {
    // ...
})

server.on('close', () => {
    // ...
})

server.listen(8000)

