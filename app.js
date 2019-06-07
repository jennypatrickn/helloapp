var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("last d commit");
});

app.listen(4000);