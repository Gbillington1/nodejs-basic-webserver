const http = require('http');
const util = require('./util.js');

const server = http.createServer((req, res) => {

    if (req.url === '/') {

        util.serveFile(req, res, 'index.html');
    
    } else if (req.url === '/about') {

        util.serveFile(req, res, 'about.html')

    } else if (req.url === '/contact-me') {

        util.serveFile(req, res, 'contact-me.html')
    } else {

        util.serveFile(req, res, '404.html')

    }

})

server.listen(3000, () => {
    console.log('Listening on port 3000')
})