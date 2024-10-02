//exercicio 1
const idade=20;
if (idade >= 20) {
    console.log("voce é maior");
} else {
    console.log("voce é de menor");
}

//exercico 2
let numero = prompt("digite um numero positivo");
if (numero % 2 == 0){
    cnsole.log("O numero" + numero,"É PAR");
}else if (numero % 2 != 0){
    console.log ("O numero" + numero, "É IMPAR");
}else{
    console.log ("O numero precisa ser positivo!")
}

//exercicio 3
let numero2 = prompt("Digite um número:");
if (numero2 > 0) {
    console.log("Número positivo");
} 
else if (numero2< 0){
console.log("Número negativo");
} else {
console.log("Zero");
}


//exercico 4
for (let i = 1; i < 11; i++) {
    let total =5 * i;
    console.log("5 x" + i + " = " + total);
}  

let contador = 10;