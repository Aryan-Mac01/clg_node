const http = require('http');
const fs = require('fs');

const home = fs.readFileSync('home.html');
const service = fs.readFileSync('service.html');
const contact = fs.readFileSync('contact.html');
const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type','text/html');
    res.statusCode=200;
    if(req.url === '/'){
        res.write(home);
    }
    else if(req.url === '/contact'){
        res.write(contact);
    }
    else if(req.url === '/service'){
        res.write(service);
    }
    res.end();
})

server.listen(3000);