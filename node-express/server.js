var morgan = require('morgan');
var express = require('express');
var dishRouter = require('./dishRouter.js');
var promotionRouter = require('./promoRouter.js');
var leaderRouter = require('./leaderRouter.js');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

app.use('/dishes',dishRouter);
app.use('/promotions',promotionRouter);
app.use('/leadership',leaderRouter);
app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});