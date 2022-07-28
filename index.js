const express = require('express');
const app = express();

app.get('/*', (req, res) => {
    if (req.path.includes('.css')) {
        res.sendFile(__dirname + '/' + req.path + '', (err) => {
            if (err) {
                res.sendFile(__dirname + '/css/' + req.path + '');
            }
        });
    } else if (req.path.includes('.js')) {
        res.sendFile(__dirname + '/' + req.path + '', (err) => {
            if (err) {
                res.sendFile(__dirname + '/js/' + req.path + '');
            }
        });
    } else {
        res.sendFile(__dirname + '/' + req.path + '', (err) => {
            if (err) {
                res.sendFile(__dirname + '' + req.path + '.html');
            }
        });
    }
});

app.listen(80)