const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send('e');
});

app.get('/registro/:name', (req, res) => {
    return res.send(req.params.name);
});

app.listen(80);