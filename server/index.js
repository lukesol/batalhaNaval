const websocket = require('ws');
const server = new websocket.Server({ port: '3000'});


server.on('connection', function connection(ws){
    console.log('Um cliente se conectou');

    ws.on('message', function incoming(message) {
        console.log('Mensagem recebida:', message.toString());
    });

		ws.on('close', function close() {
        console.log('Um cliente se desconectou');
    });

    ws.send('Mensagem do servidor');
});
