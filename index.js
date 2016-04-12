'use strict';

var Hapi = require( 'hapi' );
var server = new Hapi.Server();

server.connection( {
	'port' : 9898
} );

server.route( [
	{
		'method' : 'GET',
		'path' : '/v1/hello',
		'handler' : function ( request, reply ) {
			return reply( 'Hello World' );
		}
	}
] );

server.start( function ( error ) {

	if ( error ) {
		throw error;
	}

	console.log( 'One two three Song Joong ki' );
	console.log( 'Server started' );
} );
