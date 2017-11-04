const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 3000;

const SerialPort = require("serialport");
const StringDecoder = require('string_decoder').StringDecoder;

const arduino1SerialPort = "/dev/ttyS3"; //windows - COM[] , linux(regular arduino) - /dev/ttyACM[] , linux(ch34x) - /dev/ttyUSB[]
const arduino1SerialBaudrate = 9600;
var sp = new SerialPort(arduino1SerialPort, {
  baudrate: arduino1SerialBaudrate,
  parser: SerialPort.parsers.readline('/')
});




server.listen(port);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/HTMLPage.html');
});

app.use(express.static('./public'));




sp.on("open", function () {
  console.log('open');
  io.on('connection', function (socket) {
    socket.on('message', (data) => {
      sp.write(data+'\n', function(err) {
        if (err) {
          return console.log('Error on write: ', err.message);
        }
        console.log(data);
      });

      sp.on('data', function(data) {
        var decoder = new StringDecoder('utf8');
        var serialData = decoder.write(data);
        console.log(serialData);
        socket.emit('sensorValue', serialData);
      });
    });
  });
});