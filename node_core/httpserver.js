import http from 'http';


const server = http.createServer((req, res) => {
    // Request
    // console.log(req.url)
    if(req.url != '/favicon.icn') {
        console.log(req.url)
    }
    if(req.url === '/about') {
        res.end(`<h1>About page</h1>`)
    } 
    if(req.url === '/profile') {
        res.end('This is profile page')
    }
    // res.writeHead(202, 'goog', {'Content-Type': 'text/plain'})
    // res.setHeader('content-type', 'text/plain')
    res.end('hello')
});

const port = process.env.PORT || 8000;

server.listen(8000, 'localhost');


