var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("last xdd commit");
});

app.listen(4000);