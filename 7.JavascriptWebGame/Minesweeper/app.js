const express = require('express');
const app = express();

const port = process.env.PORT || 8000;

app.get('/', (req,res) => {
    res.send(`
        <html>
            <head>
                <title>minesweeper</title>
                <meta charset="utf-8"/>
            </head>
            <body style="background-color: silver;">
                <script src="minesweeper.js"></script>
            </body>
        </html>
    `);
});

app.use(express.static('./public'));

app.listen(port, () => {
    console.log("server is running!");
});