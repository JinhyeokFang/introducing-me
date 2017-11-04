const express = require('express');
const app = express();
const fs = require('fs');

const port = process.env.PORT || 8000;

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render("timeline", {title: "Hello!"});
});
app.get('/gallery', (req,res) => {
    fs.readdir('./public/images', (err, files) => {
        data = files;
        res.render('gallery', {title: "gallery"});
    });
});
app.get('/upload', (req,res) => {
    res.render("upload", {title: "upload"});
});

app.use(express.static('./public'));
app.use((req, res) => {
    res.status(404);
    res.render("404", {title: "404 NOT FOUND"});
});

app.listen(port, () => {
    console.log("server is running!");
});