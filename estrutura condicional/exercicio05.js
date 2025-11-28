let n1 = parseInt ( prompt(" Digite o primeiro número da sua sequência"));
let n2 = parseInt( prompt(" Digite o segundo número da sua sequência"));
let n3 = parseInt ( prompt(" Digite o terceiro número da sua sequência"));


if ( n1 < n2 && n2 < n3 ) {
     alert(" Os números estão em ordem crescente");
}     
     if (n1 > n2 && n2 > n3 ){
          alert("esse numero esta em ordem decrecente")
}
     else{
          alert("esse numero esta em ordem aleatoria ")
     }