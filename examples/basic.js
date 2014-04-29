'use strict';

var app = require('express')(),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    server = require('http').createServer(app),
    socket = require('socket.io').listen(server),
    Chat = require('../index.js');

app.use(cookieParser());
app.use(session({secret: 'no biggy', key: 'sid'}));

server.listen(4000);

var options = {
    authenticator: {
        getUserInfoForSessionKey: function() {
            return {
                id: 123,
                username: 'Jimmy'
            }
        }
    }
};

new Chat(options).serve(socket, app);

// A basic client in Angular.js
app.get('/', function(req, res){
    console.log(JSON.stringify(req.session));
    res.sendfile('basic.html');
});
