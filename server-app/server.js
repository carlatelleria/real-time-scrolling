let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

// CORS
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

io.on('connect', onConnect);

function onConnect(socket){
    // User connected
    console.log('User connected');

    // User disconnected
    socket.on('disconnect', function() {
        console.log('User disconnected');
    });

    // Send broadcast with scroll position
    socket.on('scroll_event', (message, callback) => {
        socket.broadcast.emit('scroll_event', message);
        
        // socket.removeAllListeners([scroll_event]);
    });
};

// Initialize server on port 5000
http.listen(process.env.PORT || 5000, () => {
    console.log(`Server started on port ${ http.address().port }.`);
});