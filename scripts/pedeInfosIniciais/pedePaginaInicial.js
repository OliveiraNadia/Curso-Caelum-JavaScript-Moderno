//DEclaracao
//Içamento
//Hoisting
//var paginaInicial = undefined
//const paginaInicial
// Tipo coercing
// if(paginalInicial != null && paginalInicial == '')

import {aceitouSalvar as storageAceitouSalvar} from '/scripts/storage/aceitouSalvar.js'
import {paginaInicial, setPaginaInicial} from '/scripts/storage/paginaInicial.js'
import {formataEndereco} from '/scripts/endereco/formataEndereco.js'



if(storageAceitouSalvar === null || storageAceitouSalvar === true){

let paginaInicialDefault = paginaInicial

if(!paginaInicialDefault){
    paginaInicialDefault = prompt("Escolha a página Inicial");
}

if(paginaInicialDefault)
{
    const enderecoCompleto = formataEndereco(paginaInicialDefault)

     $janelaPrincipal.src = enderecoCompleto

     $inputEndereco.value = enderecoCompleto

     setPaginaInicial(paginaInicialDefault)

    }
}




