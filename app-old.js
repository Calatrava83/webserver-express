const http = require('http');


http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' })
            // res.write('Hola mundo');

        let salida = {
            nombre: 'Alfredo',
            edad: 35,
            url: req.url
        };

        res.write(JSON.stringify(salida));

        res.end();
    })
    .listen(8080);

console.log('escuchando por el puerto 8080');