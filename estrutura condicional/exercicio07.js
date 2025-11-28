
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