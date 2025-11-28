// window.alert("minha primeira mensagem")

// window.confirm("hoje e sexta?")

//cpmentario em linha

/* 
comentando varias linhas

*/

// let nome = window.prompt("qual e o seu nome?")

// window.alert("bem vindo" + nome )

// console.log("apresenta mensagem na tela")
// let numero01 = parent( prompt("Digite o primeiro numero: "))



// let numero02 = parent(prompt("Digite o segundo numero:  ")
// ) 

// let soma = numero01 + numero02 

// console.log(somas)

// let num01 = parseFloat( prompt(" digite algum numero :"))

// let num02 = parseFloat(prompt(" digite algum numero"))

// let resultado = num01 + num02

// console.log(resultado)

// let idade = parseInt(prompt (" Qual é a sua idade?"))

// if (idade >= 18) {
//     console.log("voce é maior de idade, da-lheee"
//     )}
// else{
//     console.log("voce é menor de idade, baixinho?")
// }

let estacoes = prompt("digite uma estação do ano: ")

switch (estacoes) {
    case "verão":
        console.log("muito calor e praia")
        break;
    case "outuno":
        console.log("as folhas caiem no final")
        break;
    case " inverno":
        console.log("esta muito frio")
        break;
    case "primaveira":
        console.log("eu vejo flores em voce...")
        break;
    default:
        console.log("não existe eassa estação!!!")
        break;

}
