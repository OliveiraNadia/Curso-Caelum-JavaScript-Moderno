//DEclaracao
//Içamento
//Hoisting
//var paginaInicial = undefined
//const paginaInicial

let paginaInicial = prompt("Oi tudo pom?");

if(paginaInicial.substring(0,7) !== "http://" && paginaInicial.substring(0,8) !== "https://")
{
    //Assignement Atribuição
  paginaInicial = 'http://' + paginaInicial

}


$janelaPrincipal.src = paginaInicial

$inputEndereco.value = paginaInicial

