var Application = require('./lib/Application')
  , Player = require('./lib/Player')
  , Room = require('./lib/Room')

module.exports = Prattler 

function Prattler(options) {
    this.app = new Application(options);
}

Prattler.prototype.listen = function(socketServer, expressServer) {
    this.setupHTTPServer(expressServer)
    this.setupSocketServer(socketServer)
}

Prattler.prototype.setupSocketServer = function(socketServer) {
    var self = this

    socketServer.sockets.on('connection', function(socket){
        console.log('New connection')
        self.players[socket.id] = new Player(socket.id, {guest: true})

        socket.on('joinRoom', function(data) {
            if(typeof(self.rooms[data.id] === 'undefined'))
                self.rooms[data.id] = new Room(data.id)

            self.rooms[data.id].join(self.players[socket.id])
        })
        socket.on('disconnect', function(){
            delete self.players[socket.id]    
        })
    })
}

Prattler.prototype.setupHTTPServer = function(expressServer) {
    var self = this

    expressServer.get('/players', function(req, res){
        res.json(self.players)
    })

    expressServer.get('/rooms', function(req, res){
        res.json(self.rooms)
    })
}
