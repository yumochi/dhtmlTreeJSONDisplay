var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static(__dirname + '/public'));

app.use("/dhtmlxSuite_v51_std", express.static(__dirname + "/dhtmlxSuite_v51_std"));
app.use("/public", express.static(__dirname + "/public"));


app.listen(8080);