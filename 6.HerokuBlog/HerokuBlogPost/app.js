const express = require('express');
const app = express();
const fs = require('fs');
const StringDecoder = require('string_decoder').StringDecoder;

const port = process.env.PORT || 8001;

app.use(express.static('./public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/data/', (req, res) => { 
    fs.readdir('./public/posts', (err,files) => {
        res.send({
            length: files.length
        });
    });
});

app.get('/post/:number', (req, res) => {
    fs.readFile('./public/posts/'+req.params.number+'.html', (err,data) => {
        var desDecoder = new StringDecoder('utf8');
        var description = desDecoder.write(data);

        fs.readFile('./public/posts/'+req.params.number, (err,data) => {
            var titleDecoder = new StringDecoder('utf8');
            var title = titleDecoder.write(data);
            res.send({
                title: title,
                description: description
            });
        });
    }); 
});

app.get('/upload', (req, res) => {
    fs.readdir('./public/posts', (err,files) => {
        fs.writeFile('./public/posts/'+ (files.length / 2 + 1), req.query.title, (err) => {
            
        });
        fs.writeFile('./public/posts/'+ (files.length / 2 + 1) + '.html', req.query.description, (err) => {
            res.redirect('https://lastbranch.herokuapp.com');
        });
    });
});

app.listen(port, () => {
    console.log("server is running!");
});
