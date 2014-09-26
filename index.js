var express = require("express"),
  fs = require("fs"),
  bodyParser = require("body-parser"),
  logger = require("morgan"),
  port = process.env.PORT || 2595;

var app = express();
app.use(logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.set("view options", {
  layout: false
});
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
  response.render('public/index.html');
});

app.listen(port);
console.log('Express running at http://localhost:' + port);
