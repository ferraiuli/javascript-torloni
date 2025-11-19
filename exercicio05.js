alert("escreva 3 numeros aleatorios")

let n1 = parseInt (prompt("digite o primiro numero"))
let n2 = parseInt (prompt("digite o segundo numero"))
let n3 = parseInt (prompt("digite o terceiro numero"))

if(n1 < n2 && n2 < n3){
    console.log("esta em ordem crescente");
  
}
else{console.log("não esta em ordem crescente")}