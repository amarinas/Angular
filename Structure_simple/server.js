/**
 * Created by amarinas on 3/22/17.
 */
var express = require('express'),
    mongoose = require('mongoose'),
    bp = require('body-parser'),
    path = require('path'),
    root = __dirname,
    port = process.env.PORT ||8000,
    app = express();

app.use( express.static( path.join( root, 'client')));
app.use( express.static( path.join( root, 'bower_components' )));
app.use(bp.json());

//require mongoose
require(path.join(root, 'server//config/mongoose.js'));
//require routes config, pass through app
require(path.join(root, "./server/config/routes.js"))(app);

app.listen( port, function () {
    console.log( 'server running on port 8000 in project friends mean');
});
