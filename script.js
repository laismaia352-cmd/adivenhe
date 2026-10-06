//SORTEIO DO NUMERO AREATORIO 
let numeroPensado;
let tentativas;

function sortearNumero(){
    numeroPensado=
Math.floor(Math.random()*101);
tentativas = 5;
console.log(numeroPensado);
alert("Novo numero sorteado tente advinhar!! Você tem 05 tentativas");


    document.getElementById("dica1").innerText = "▶ DICA 1";
    document.getElementById("dica2").innerText = "▶ DICA 2";
    document.getElementById("resultado").innerText = "Você tem 5 tentativas restantes.";
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

  // Validação caso o campo esteja vazio
    if (document.getElementById("CHUTE").value === "") {
        alert("Digite um número antes de chutar!");
        return;
    }

    // Validação se as tentativas já tinham acabado antes deste chute
    if (tentativas <= 0) {
        alert("Suas tentativas acabaram! Clique em 'Vamos Jogar' para iniciar uma nova partida.");
        return;
    }


    // DIMINUI UMA TENTATIVA A CADA CHUTE 
    tentativas--;

           

    // Compara se o chute é igual ou diferente do numeroPensado
   if (chuteDoUsuario === numeroPensado) {
        alert("Parabéns! Você acertou o número! 🎉");
        document.getElementById("resultado").innerText = "🎉 Você acertou!";
        document.getElementById("dica1").innerText = "🎉 Parabéns!";
        document.getElementById("dica2").innerText = "";
        numeroPensado = undefined; // Encerra a partida
    }
    else if (tentativas > 0) {
        alert("Que pena! O número está incorreto. Restam " + tentativas + " tentativa(s)! ❌");
        document.getElementById("resultado").innerText = "Tentativas restantes: " + tentativas;



 if (chuteDoUsuario < numeroPensado) {
       alert("Que pena! O número está incorreto. Restam " + tentativas + " tentativa(s)! ❌");
        document.getElementById("resultado").innerText = "Tentativas restantes: " + tentativas;
        document.getElementById("dica1").innerText = "▶ DICA: O número pensado é MAIOR!";
    } 
    
    else if (chuteDoUsuario > numeroPensado) {
        alert("Que pena! O número está incorreto. Restam " + tentativas + " tentativa(s)! ❌");
        document.getElementById("resultado").innerText = "Tentativas restantes: " + tentativas;
        document.getElementById("dica1").innerText = "▶ DICA: O número pensado é MENOR!";
    } 
    if (numeroPensado % 2 === 0)
         {
            document.getElementById("dica2").innerText = "▶ DICA: O número sorteado é PAR!";
        } else {
            document.getElementById("dica2").innerText = "▶ DICA: O número sorteado é ÍMPAR!";
        }

    }
    
    // Caso errou e acabaram as tentativas (Game Over)
    else {
        alert("Fim de jogo! Você usou todas as 5 tentativas. O número correto era " + numeroPensado + ". 😞");
        document.getElementById("dica").innerText = "▶ GAME OVER! O número era " + numeroPensado;
        document.getElementById("resultado").innerText = "Suas chances acabaram! Clique em 'Vamos Jogar' para tentar novamente.";
        numeroPensado = undefined; // Encerra a partida
    }


    document.getElementById("CHUTE").value = "";

}
    document.getElementById("botaochutar").addEventListener("click", verificarChute);
   







