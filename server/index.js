const express = require('express');
const WebSocket = require('ws');
const http = require('http');

// Inicializa o servidor Express
const app = express();

// Define a pasta de arquivos estáticos
app.use(express.static('public'));

// Cria um servidor HTTP baseado no Express app
const server = http.createServer(app);

// Inicializa o servidor WebSocket no mesmo servidor HTTP
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('Cliente conectado via WebSocket');

    ws.on('message', (message) => {
        console.log(`Mensagem recebida: ${message}`);
    });

    ws.send('Olá Cliente!');
});

// Inicia o servidor HTTP
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor executando na porta ${PORT}`);
});