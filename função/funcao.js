function exibirTB() {

    let tabuada = parseInt(prompt("digite um numero de uma tabuada: "));
    console.log(`=========TABUADA ${tabuada}========`);

    for (let i = 1; i <= 10; i++) {
        console.log(tabuada + " X " + i + " = " + (tabuada * i));


    }
}

exibirTB();

function nome(){
    let nome = prompt("Qual seu nome?")
    console.log("ola, " + nome + "!" )
}
nome();

function somarDoisNumeros(numero1, numero2){
console.log(numero1+numero2);

}
somarDoisNumeros(10, 10);



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
