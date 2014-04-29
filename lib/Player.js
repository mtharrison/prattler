module.exports = Player;

function Player(id, options) {
   this.guest = options.guest || false;
   this.id = id;
}

Player.prototype.whatever = function() {

}
