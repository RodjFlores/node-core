const http = require('http')

const server = http.createServer((req,res) => {
    // write and end are the same except for semantics
    if(req.url === '/'){
        res.end('HElllo to the server')
        return
    }

    if(req.url === '/about'){
        res.end('this is about!!')
        return
    }
    //Writes the string to the localhost:5000 page
    res.end('<h1>404 not found!</h1>');
    return
})

server.listen(5000)