const socket = new WebSocket('ws://localhost:3000');

// Esperar por conexão

socket.addEventListener('open', (e) => {
    console.log('cliente se conectou, dados: ', e)
})


socket.addEventListener("message", ({ data }) => {
    const mensagem = document.getElementById('mensagem');
    mensagem.innerHTML = data;
    
});


const colunas = document.getElementsByClassName('coluna');

console.log(colunas);

