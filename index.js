var express = require("express"),
  fs = require("fs"),
  bodyParser = require("body-parser"),
  logger = require("morgan"),
  port = process.env.PORT || 2595;
var bookings = [];
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

app.get('/movies', function(request, response){
  var movies = require('./data/movies.json');
  response.json(movies);
});

app.post('/book', function(request, response){
  var data = {
    'qty' : request.body.qty,
    'date' : request.body.date,
    'id' : request.body.movie_id,
    'name' : request.body.movie_name
  };

  bookings.push(data);
  response.json(bookings);
});

app.get('/bookings', function(request, response) {
  response.json(bookings);
});

app.listen(port);
console.log('Express running at http://localhost:' + port);
