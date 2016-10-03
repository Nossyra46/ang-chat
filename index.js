var express = require('express');
var app = express();
var path = require('path');

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + "/app"));
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + "/app/views/index.html"));
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  socket.on('disconnect', function() {
  	console.log('a user disconnected');
  })
});

http.listen(3000, function(){
	console.log('listening on *:3000');
});