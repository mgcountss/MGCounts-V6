const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/*', (req, res) => {
    res.sendFile(__dirname + req.path, (err) => {
        if (err) {
            res.sendFile(__dirname + req.path+'.html', (err) => {
                if (err) {

                }
            });
        }
    });
});

app.listen(80);