const fs = require('fs')

module.exports.serveFile = (req, res, file) => {

    fs.readFile(file, (err, data) => {

        if (err) {
            console.error(err)
            res.statusCode = 400;
            res.end('Error')
        }

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html')
        res.end(data.toString())

    })

}