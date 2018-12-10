var express = require('express'),
app = express(),
server = require('http').createServer(app),
io = require('socket.io').listen(server);
csv = require('fast-csv');

var stats = [];
var news = [];
var stockCount = 1;
var newsCount = 1;

function addOrUpdateStock(item, stock) {
	if (stockCount < 1500000)
	{
	    if(item[2].includes(stock)) {
	    	stats.push(item);
	    }
	    console.log("Stock Count: " + stockCount);
	   	stockCount++;
   }
}

function addOrUpdateNews(item, stock) {
	if (newsCount < 1500000)
	{
	    if(item[17].includes(stock)) {
	    	news.push(item);
	    }
	    console.log("News Count: " + newsCount);
	   	newsCount++;
   }
}

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

server.listen(5000);

io.sockets.on('connection', function(socket) {
	console.log('SOCKET CONNECTED\n');

	socket.on('stock', function(stock) {
		console.log("STOCK RECEIVED: " + stock + "\n");

		stats = [];
		news = [];

		stockCount = 1;
		newsCount = 1;

		csv
		 .fromPath("marketdata.csv")
		 .on("data", function(data){
		        addOrUpdateStock(data, stock);
		 })
		 .on("end", function(){
		     console.log(stats);
		     io.sockets.emit('stock_stats', stats);
		 });

		csv
		 .fromPath("newsdata.csv")
		 .on("data", function(data){
		        addOrUpdateNews(data, stock);
		 })
		 .on("end", function(){
		     console.log(news);
		     io.sockets.emit('news', news);
		 });
	});
});

io.sockets.on('disconnect', function(socket) {
	console.loge("SOCKET DISCONNECTED\n");
});