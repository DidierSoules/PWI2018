const http = require('http');
const server = http.createServer(function(req,res) {
    res.writeHead(200,{'content-type':'html'});
    res.write("<html><head></head><body><h1>Pagina nueva</h1><br><h3>lallalalalalalalalallaalalalalala</h3></body></html>");
})

server.listen(3333);

console.log("Web Iniciada");