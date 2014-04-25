loud Casino Chat
===

This is the service used by cloud casino for chatting between players.
It features a REST API and a Socket.io compliant API.

When a player is added to a game (room), the client should transmit the room identifier
to the socket API which will then register a mapping between players/rooms.

When a player disconnects, all the rooms will be flushed of them.

##Websocket API

##Emitted events
===
##Accepted events

####joinRoom

To be emitted upon joining a new room. Will call the specified callback with a list of users in that room.

**Request data model**

    {
        "room": "d41d8cd98f00b204e9800998ecf8427e"
    }

**Response data model**

    {
        "players": {
            {"id": 12, "name": "JimBobJones"}
        }
    }

####leaveRoom

To be emitted upon leaving a room, if possible.

**Request data model**

    {
        "room": "d41d8cd98f00b204e9800998ecf8427e"
    }

##Usage

1 Establish a connection to the server via websocket

    var socket = io.connect("1.1.1.1:3000");
    
