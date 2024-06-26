const uuid = require('uuid');
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

const clientes = {};
const partidas = {};


wss.on('connection', (ws) => {
    idCliente = uuid.v4();
    clientes[idCliente] = {
        'ws' : ws,
    };

    const payLoad = {
        'method' : 'connection',
        'idCliente' : idCliente
    }

    ws.send('Esperando outro jogador');
    ws.send(JSON.stringify(payLoad));
        
    console.log(clientes[idCliente])
    // ws.send(JSON.stringify(clientes[idCliente]))

    ws.on('message', (message) => {
        console.log(`Mensagem recebida: ${message}`);
    });


    ws.on('close', (number) => {
        console.log('Um cliente se desconectou');
    })
});

// Inicia o servidor HTTP
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor executando na porta ${PORT}`);
});