const http = require('http');
const routes = require('./routes.js');


const server = http.createServer((req, res) => {

    console.log(req.url)

    if (req.url === '/') {

        routes.serveFile(req, res, 'index.html');
    
    } else if (req.url === '/about') {

        routes.serveFile(req, res, 'about.html')

    } else if (req.url === '/contact-me') {

        routes.serveFile(req, res, 'contact-me.html')
    } else {

        routes.serveFile(req, res, '404.html')

    }

})

server.listen(3000, () => {
    console.log('Listening on port 3000')
})