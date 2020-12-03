const glob = require( 'glob' )
const path = require( 'path' );
const days = [];

glob.sync( './Days/*.js' ).forEach( function( file ) {
  days.push(require( path.resolve( file ) ));
});

module.exports = {
    days: days
}
