//SORTEIO DO NUMERO AREATORIO 
let numeroPensado;

function sortearNumero(){
    numeroPensado=
Math.floor(Math.random()*101);
console.log(numeroPensado);
alert("Novo numero sorteado tente advinhar!!")

// Limpa a dica anterior ao iniciar um novo jogo
    document.getElementById("dica").innerText = "▶ DICA";
    document.getElementById("CHUTE").value = "";
}


document.getElementById("botaojogar").addEventListener("click", sortearNumero)


//função para verificar chute 

function verificarChute(){

    let chuteDoUsuario = Number(document.getElementById("CHUTE").value);

    // Validação caso o jogador tente chutar sem sortear primeiro
    if (numeroPensado === undefined) {
        alert("Clique em 'Vamos Jogar' primeiro para sortear um número!");
        return;
    }
    // Compara se o chute é igual ou diferente do numeroPensado
    if (chuteDoUsuario === numeroPensado) {
        alert("Parabéns! Você acertou o número! 🎉");
   
    } else if (chuteDoUsuario < numeroPensado) {
        alert("Que pena! O número está incorreto. Tente novamente! ❌");
        document.getElementById("dica").innerText = "▶ DICA: O número pensado é MAIOR!";
    } else {
        alert("Que pena! O número está incorreto. Tente novamente! ❌");
        document.getElementById("dica").innerText = "▶ DICA: O número pensado é MENOR!";
    } 

    document.getElementById("CHUTE").value = "";

    document.getElementById("botaochutar").addEventListener("click", verificarChute);
   
}
 document.getElementById("botaochutar").addEventListener("click", verificarChute);






