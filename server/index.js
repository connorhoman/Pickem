var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mongo');

var app = express();

app.use(bodyParser.urlencoded({extended: true, parameterLimit: 1000000, limit: '500mb'}));
app.use(bodyParser.json({limit: '500mb'}));

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/players', function (req, res) {
  db.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3006, function() {
  console.log('listening on port 3006!');
});
