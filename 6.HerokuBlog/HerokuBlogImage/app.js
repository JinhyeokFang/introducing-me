const express = require('express');
const app = express();
const fs = require('fs');

const port = process.env.PORT || 8002;

app.use(express.static('./public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/data/', (req, res, next) => {
    fs.readdir('./public/images', (err,files) => {
        res.send({
            length: files.length
        });
    });
});

app.listen(port, () => {
    console.log("server is running!");
});
