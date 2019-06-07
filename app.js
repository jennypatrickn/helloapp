var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Four commit");
});

app.listen(4000);