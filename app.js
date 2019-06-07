var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("last j commit");
});

app.listen(4000);