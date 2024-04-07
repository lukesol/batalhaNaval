const socket = new WebSocket('ws://localhost:3000')

function enviaMensagem(e){
    e.preventDefault();
    const input = document.querySelector('input');


    if(input?.value){
        socket.send(input.value);
        input.value = "";
    }
    input?.focus();
}
document.querySelector('form')
?.addEventListener('submit', enviaMensagem);

// Esperar por mensagem 

socket.addEventListener("message", ({ data }) => {
    console.log("Recebendo mensagem do servidor");
});