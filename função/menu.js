// -----------------------------------------------1--------------------------------------
function imc( peso, altura) {


let imc = peso / (altura * altura);

let classificacao = "";

if (imc < 18.5) {   
    classificacao = "Abaixo do peso";
} else if (imc >= 18.5 && imc <= 24.9) {
    classificacao = "Peso normal";
} else if (imc >= 25.0 && imc <= 29.9) {
    classificacao = "Sobrepeso";
} else if (imc >= 30.0 && imc <= 34.9) {
    classificacao = "Obesidade grau 1";
} else if (imc >= 35.0 && imc <= 39.9) {
    classificacao = "Obesidade grau 2";
} else {
    classificacao = "Obesidade grau 3";
}

alert(`Seu IMC é: ${imc.toFixed(2)}\nClassificação: ${classificacao}`);
console.log(`IMC: ${imc.toFixed(2)} - ${classificacao}`);

}
let peso = parseFloat(prompt("Digite seu peso em kg:"));
let altura = parseFloat(prompt("Digite sua altura em metros:"));

imc(peso, altura);

// -------------------------------------------------------------2--------------------------------
function exibirTB() {

    let tabuada = parseInt(prompt("digite um numero de uma tabuada: "));
    console.log(`=========TABUADA ${tabuada}========`);

    for (let i = 1; i <= 10; i++) {
        console.log(tabuada + " X " + i + " = " + (tabuada * i));


    }
}

exibirTB();

// -----------------------------------------------------3--------------------------------------

function conferirSequenciaa() {

    let n1 = parseInt(prompt(" Digite o primeiro número da sua sequência"));
    let n2 = parseInt(prompt(" Digite o segundo número da sua sequência"));
    let n3 = parseInt(prompt(" Digite o terceiro número da sua sequência"));


    if (n1 < n2 && n2 < n3) {
        alert(" Os números estão em ordem crescente");
    }
    if (n1 > n2 && n2 > n3) {
        alert("esse numero esta em ordem decrecente")
    }
    else {
        alert("esse numero esta em ordem aleatoria ")
    }


}

// -------------------------------------------------4---------------------------

function ImparPar() {
    let numero = parseInt(prompt("digite o numero e veja se ele é par ou impar:"));

if (numero % 2 == 0){
    alert("O número " + numero + " é par.");
} else {
    alert("O número " + numero + " é impar.");
}


    
}

// ------------------------------------------5-------------------------

function compraDesconto(){

let valorproduto = Number(prompt("Digite o valor total da compra: "));

let desconto = 0;

if (valorproduto <= 100) {
    desconto = 0;
} else if (valorproduto <= 200) {
    desconto = valorproduto * 0.10;
} else {
    desconto = valorproduto * 0.20;
}

let Total = valorproduto - desconto;

alert("Valor da compra: R$ " + valorproduto.toFixed(2) +
      "\nDesconto: R$ " + desconto.toFixed(2) +
      "\nTotal: R$ " + Total.toFixed(2));







}