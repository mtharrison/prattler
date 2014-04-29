module.exports = Room

function Room(options) {
   this.name = options.name
   this.players = []
}

Room.prototype.join = function(player) {
    this.players.push(player)
}
