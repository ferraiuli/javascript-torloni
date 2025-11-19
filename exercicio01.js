// let usuario = prompt("digite o seu nome de usuario: ")

// switch (usuario) {
//     case "admin":
//         console.log("usuario correto")
//         break;

//     default:
//         console.log("usuario incorreto")
//         break;
// }

// let senha = prompt(" digite a senha: ")

// switch (senha) {
//     case "senha123":
//         console.log("senha correta, bem vindo admin!")
//         break;

// default:
//         console.log("senha incorreta")
//         break;

// }
// window.alert("login bem-sucedido" )

let usuario = prompt("digite o seu nome de usuario: ")
let senha = prompt("digite sua senha")

if (usuario == "admin" && senha == "senha123" ) {
    console.log("login bem-sucedido")
    
}
else{
    console.log("login incorreto! ;-;")
}