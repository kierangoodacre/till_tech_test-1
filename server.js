var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.set('view engine', 'ejs');
app.use('/stylesheets', express.static(__dirname + '/public/stylesheets'));
app.use('/javascripts', express.static(__dirname + '/public/javascripts'));

app.get('/', function(request, response){
  response.render("index")
});

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;