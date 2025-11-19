alert("informe as notas de 0 a 10")

let nota1 = parseFloat(prompt("digite a primeira nota: "))
let nota2 = parseFloat(prompt("digite a segunda nota: "))
let nota3 = parseFloat(prompt("digite a terceira nota: "))
let nota4 = parseFloat(prompt("digite a quarta nota: "))

let media = (nota1 + nota2 + nota3 + nota4)/4

console.log("a media do aluno é: " + media)

if(media >=7){
    console.log("Aprovado")
}

else if (media < 7 && media >= 5){
console.log ("Recuperação")
}
else{
    console.log("Reprovado ;-; ")
}