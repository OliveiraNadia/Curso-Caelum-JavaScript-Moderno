//DEclaracao
//Içamento
//Hoisting
//var paginaInicial = undefined
//const paginaInicial
// Tipo coercing
// if(paginalInicial != null && paginalInicial == '')

const aceitouSalvar = JSON.parse(localStorage.getItem("aceitouSalvar"))

if(aceitouSalvar === null){

  let paginaInicial = localStorage.getItem("paginaInicial")

if(!paginaInicial){
  paginaInicial = prompt("Escolha a página Inicial");
}

if(paginaInicial)
{

    if(paginaInicial.substring(0,7) !== "http://" 
    && paginaInicial.substring(0,8) !== "https://")
    {
        //Assignement Atribuição
      paginaInicial = 'http://' + paginaInicial

    }

     $janelaPrincipal.src = paginaInicial

     $inputEndereco.value = paginaInicial

     localStorage.setItem("paginaInicial", paginaInicial)

}

}




