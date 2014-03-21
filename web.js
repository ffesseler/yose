var express = require("express");
var logfmt = require("logfmt");
var jade = require('jade');
var path = require('path');
var app = express();

app.use(logfmt.requestLogger());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

app.get('/ping', function(req, res) {
    res.send({
        alive: true
    });
});

var port = Number(process.env.PORT || 5000);

app.listen(port, function() {
    console.log("Listening on " + port);
});