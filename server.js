'use strict';

var express = require('express');
var cors = require('cors');

// require and use "multer"...

var app = express();
var port = process.env.PORT || 3000;

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

let listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening at http://localhost:' + listener.address().port);
});
