var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('../index.html');
});

app.use(express.static(__dirname + '/'));

io.on('connection', function(socket){
  console.log('a user connected');
});

io.on('connection', function (socket) {
  var newMessage;

  socket.on('chat message', function (message) {
    newMessage = {
      text: message.text,
      user: message.user
    };

    console.log('-------------------------------');
    console.log('New message');
    console.log('-------------------------------');
    console.log('User [' + message.user.id + ']: ' + message.user.name);
    console.log('Message: ' + message.text);

    io.emit('chat message', newMessage);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
