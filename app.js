const http = require('http')
const fs = require('fs')

const server = http.createServer()


server.on('request' , (req,response)=> {
    const fileStream = fs.createReadStream('./content/big.txt', {encoding:'utf8'})
    fileStream.on('open', ()=> {
        response.end('ME')
    })
})

server.listen(5000)