var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    socket = require('socket.io').listen(server),
    fs = require('fs');

var rooms = {};
var players = {};
var playerRooms = {};


// Serve example files
//
// /examples/basic
//
app.get('/examples/:name', function(req, res){
   var filename = './examples/' + req.params.name + '.html';
   fs.readFile(filename, function(err, data){ 
        if(!err)
            res.sendfile(filename);
        else
            res.status(404).send("File not found.");
    }); 
});

app.listen(3000);
