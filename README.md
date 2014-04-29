Pluggable Chat
===

This is a node module intended for bolting a chat service onto an existing application with external authentication and identification.

The module can be used standalone with a thin authentication layer or can be composed within a larger application or game.

It features a REST API and a Socket.io compliant API.

When a player is added to a game (room), the client should transmit the room identifier
to the socket API which will then register a mapping between players/rooms.

When a player disconnects, all the rooms will be flushed of them.

It has support for public rooms and private conversation (secret rooms).

Authentication is cookie based. When a new connection comes in, the presented session cookie is passed off to an external service which will return a valid or invalid response along with the user's id and nickname.

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
    
