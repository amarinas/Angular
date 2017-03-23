/**
 * Created by amarinas on 3/21/17.
 */
var express = require('express'),
    mongoose = requrie('mongoose'),
    bp = require('body-parser'),
    path = require('path'),
    root = __dirname,
    port = process.env.PORT ||8000,
    app = express();

app.use( express.static( path.join( root, 'client')));
app.use( express.static( path.join( root, 'bower_components' )));
app.use(bp.json())



app.listen( port, function () {
    console.log( 'server running on port ${ port}');
});