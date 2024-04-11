const socket = new WebSocket('ws://localhost:3000');

let clientId = null;

// Esperar por conexão
socket.addEventListener('open', (e) => {
    console.log('cliente se conectou, dados: ', e)
})


socket.addEventListener("message", ({ data }) => {
    // setTimeout(() => {
        if(data.metodo == 'connect'){
            clientId = data.clientId
        }
            console.log(data)
        const mensagem = document.getElementById('mensagem');
        mensagem.innerHTML = data;    
    // }, 500);
});


const colunas = document.getElementsByClassName('coluna');

console.log(colunas);

