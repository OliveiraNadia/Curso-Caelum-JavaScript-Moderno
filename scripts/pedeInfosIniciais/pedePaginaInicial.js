//DEclaracao
//Içamento
//Hoisting
//var paginaInicial = undefined
//const paginaInicial
// Tipo coercing
// if(paginalInicial != null && paginalInicial == '')

import aceitouSalvar from '/scripts/storage/aceitouSalvar.js'
import paginaInicial from '/scripts/storage/paginaInicial.js'



if(aceitouSalvar === null || aceitouSalvar === true){

let paginaInicialDefault = paginaInicial
if(!paginaInicialDefault){
    paginaInicialDefault = prompt("Escolha a página Inicial");
}

if(paginaInicialDefault)
{

    if(paginaInicialDefault.substring(0,7) !== "http://" 
    && paginaInicialDefault.substring(0,8) !== "https://")
    {
        //Assignement Atribuição
      paginaInicialDefault = 'http://' + paginaInicialDefault

    }

     $janelaPrincipal.src = paginaInicialDefault

     $inputEndereco.value = paginaInicialDefault

     localStorage.setItem("paginaInicial", paginaInicialDefault)

    }
}




