const http = require('http');

http.createServer((request, response) => {
    /*
    response.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    response.writeHead(202, { 'Content-Type': 'application/csv' });
    */


    response.write();
    response.end();
}).listen(8080);

console.log('Escuchando');