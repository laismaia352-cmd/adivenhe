//SORTEIO DO NUMERO AREATORIO 
let numeroPensado;

function sortearNumero(){
    numeroPensado=
Math.floor(Math.random()*101);
console.log(numeroPensado);
alert("Novo numero sorteado tente advinhar!!")
}

document.getElementById("botaojogar").addEventListener("click", sortearNumero)


