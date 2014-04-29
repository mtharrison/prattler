module.exports = Room;

function Room(id) {
   this.id = id;
   this.players = []
}

Room.prototype.join = function(player) {
    this.players.push(player);
}
