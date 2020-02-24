var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ 'extended': false, 'limit': 1024 }));
app.use(express.static(path.join(__dirname)));

app.post('/submit', function (req, res) {
    const uname = req.body.name;
    const uemail = req.body.email;
    const text = req.body.comment;
    res.set({ 'Content-Type': 'text/html' }); 
    res.write("name: " + uname);
    res.write("<br/>email: " + uemail);
    res.write("<br/>comment: " + text);
    res.end();
});

app.listen(8080, function() {
});